<script>
    export let handlePageSelect = () => {};

    let selectedPage;
    export let pagesCount = 0;
</script>

<div class="flex-row">
    <p>Jump to:</p>

    <form
        on:submit|preventDefault={handlePageSelect(selectedPage)}
        class="align-center"
    >
        <select
            id="pages-option"
            bind:value={selectedPage}
            on:change={() => handlePageSelect(selectedPage)}
        >
            {#each Array(pagesCount) as _, idx}
                <option id={`page-${idx}`} value={idx + 1}>
                    <p>Page {idx + 1}</p>
                </option>
            {/each}
        </select>
    </form>
</div>
