export class ApiClient {
    url = "https://rickandmortyapi.com/api/character"

    getEndpointUrl(searchText) {
        if (searchText) {
            return this.url + `/?name=${searchText}`
        }

        return this.url
    }

    async fetchCharacter(name) {
        const req = await fetch(this.getEndpointUrl(name))
        const { results } = await req.json()

        return results
    }
}