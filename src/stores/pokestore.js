// https://pokeapi.co/api/v2/pokemon?limit=150
import {writable} from "svelte/store";

export const pokemon = writable([]);

function capitalize(name){
    const lower = name.toLowerCase();
    return name.charAt(0).toUpperCase() + lower.slice(1)
}

const fetchPokemon = async () => {
    let url = `https://pokeapi.co/api/v2/pokemon-species?limit=898`;
    let res = await fetch(url);
    let data = await res.json();
    const loadedPokemon = data.results.map((data, index) => {
        return {
            name: capitalize(data.name),
            id: index + 1,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${index + 1}.png`
        }
    })
    pokemon.set(loadedPokemon);
};

fetchPokemon();