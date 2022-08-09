<script>
    export let name = "" ;
    export let specie = "" ;
    export let type = "" ;
    export let gender = "" ;
    export let image = "" ;
</script>

<div class="card">
    <img class="character-img" alt="name" src={image} />

    <div class="details-container">
        <h2 id="character-name">
            <a href="link"> {name} </a>
        </h2>
        <p id="character-specie">{specie}</p>
        <p id="character-type">{type}</p>
        <p id="character-gender">{gender}</p>

        <button>
            View Character Episide
        </button> 
    </div>
</div>
