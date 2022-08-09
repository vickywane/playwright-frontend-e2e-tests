export class ApiClient {
    url = "https://rickandmortyapi.com/api/character"

    getEndpointUrl(searchText, pageNo) {
        if (searchText) {
            return this.url + `/?name=${searchText}`
        }

        if (pageNo) {
            return this.url + `/?page=${pageNo}`
        }

        return this.url
    }

    async fetchCharacter(name, pageNo) {
        const req = await fetch(this.getEndpointUrl(name, pageNo))

        console.log("ENDPOINT ->", this.getEndpointUrl(name, pageNo));

        const { results } = await req.json()

        return results
    }
}