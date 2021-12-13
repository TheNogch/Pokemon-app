<script>
    import {pokemon} from "../stores/pokestore"
    import PokemonCard from "../components/pokemanCard.svelte"

    let searchTerm = ""
    let filteredPokemon = [];

    $: {
        if(searchTerm){
            filteredPokemon = $pokemon.filter(pokeman => pokeman.name.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        else{
            filteredPokemon = [...$pokemon];
        }
    }

</script>

<h1 class="text-4xl text-indigo-500 text-center my-7"> Pokemon APP</h1>
<input class="text-lg p-4 w-full border-2 border-gray-200 rounded-md" bind:value={searchTerm} placeholder="Search by Name">
<div class="bg-gray-200 grid grid-cols-12 gap-4 rounded-xl p-4 my-7">
    {#each filteredPokemon as pokeman}
    <PokemonCard pokeman={pokeman} />
    {/each}
</div>