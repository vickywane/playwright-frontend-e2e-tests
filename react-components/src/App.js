import React from 'react'
import './App.css';
import "./styles/characters.css"
import { ApiClient } from './apiClient'

const Character = ({ name, specie, type, gender, image }) => (
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

const SearchField = ({ handleSearchText, executeSearch }) => {
  return (
    <form onSubmit={(e) => {
      executeSearch()
      e.preventDefault()
    }}>
      <input
        onChange={(e) => {
          handleSearchText(e.target.value)
          e.preventDefault()
        }}
        className="character-input"
        placeholder="Type in character name"
      />

      <button onClick={() => executeSearch()}>
        Find Character
      </button>
    </form>
  )
}

function App() {
  const [characters, setCharacters] = React.useState(null)
  const [searchText, setSearchText] = React.useState('')

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
            <SearchField
              executeSearch={() => fetchData(searchText)}
              handleSearchText={(text) => setSearchText(text)}
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
