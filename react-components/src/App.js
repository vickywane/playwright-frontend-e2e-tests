import React from 'react'
import './App.css';
import "./styles/characters.css"
import { ApiClient } from './apiClient'

export const Character = ({ name, specie, type, gender, image }) => (
  <div className="card" >
    <img className="character-img" alt={`${name} character`} src={image} />

    <div className="details-container" >
      <h2> {name} </h2>
      <p> {specie} </p>
      <p> {type} </p>
      <p> {gender} </p>
    </div>
  </div>
)

export const SearchField = ({ executeSearch }) => {
  const [searchText, setSearchText] = React.useState('')

  return (
    <form onSubmit={(e) => {
      executeSearch(searchText)
      e.preventDefault()
    }}>
      <input
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value)
          e.preventDefault()
        }}
        className="character-input"
        id="search-field"
        placeholder="Type in character name"
      />

      <button
       disabled={searchText <= 2} 
       id="find"
       onClick={() => executeSearch(searchText)}>
        Find Character
      </button>
    </form>
  )
}

function App() {
  const [characters, setCharacters] = React.useState(null)

  const Client = new ApiClient()

  React.useEffect(() => {
    (async () => await fetchData())()
  }, [])

  const fetchData = async (text) => {
    const characters = await Client.fetchCharacter(text)

    setCharacters(characters)
  }

  return (
    <div >
      <h1 className="title" > Rick and Morty </h1>

      {
        !characters ?
          <div>
            <p> Loading Rick and Morty characters </p>
          </div>
          :
          <div>
            <SearchField executeSearch={(text) => fetchData(text)}
            />
            <br />
            <hr />
            <br />
            <ul className="list">
              {
                characters.map((item) => (
                  <li key={item.id} >
                    <Character
                      name={item.name}
                      specie={item.species}
                      type={item.type}
                      gender={item.gender}
                      image={item.image}
                    />
                  </li>
                ))
              }

            </ul>
          </div>
      }

    </div>
  );
}

export default App;
