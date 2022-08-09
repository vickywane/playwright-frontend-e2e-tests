<script>
	import { onMount } from "svelte";
	import { ApiClient } from "react-components/src/apiClient";
	import "react-components/src/styles/characters.css";
	import Character from "./character.svelte";
	import Paginator from "../components/Paginator.svelte";

	const client = new ApiClient();
	let characterData = [];

	onMount(async () => await fetchCharacters());

	const fetchCharacters = async (pageNo) => {
		try {
			const data = await client.fetchCharacter(null, pageNo);

			characterData = data;
		} catch (e) {
			console.log(e);
		}
	};
</script>

<svelte:head>
	<title>Rick and Morty Playwright</title>
</svelte:head>

<div>
	<h1 id="title" class="title">Rick and Morty</h1>

	{#if characterData.length < 1}
		<div>Loading Characters</div>
	{:else}
		<div>
			<Paginator
				pagesCount={42}
				handlePageSelect={(number) => fetchCharacters(number)}
			/>

			<ul class="list">
				{#each characterData as character}
					<li>
						<Character
							name={character.name}
							type={character.type}
							gender={character.gender}
							specie={character.specie}
							link={character.origin.url}
							image={character.image}
						/>
					</li>
				{/each}
			</ul>
		</div>
	{/if}
</div>
