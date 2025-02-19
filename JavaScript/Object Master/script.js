const pokemon = Object.freeze([
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 35,  "name": "Clefairy",   "types": ["normal"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
]);


// 1. An array of Pokemon objects where the id is evenly divisible by 3
const idDivisibleByThree = pokemon.filter(p => p.id % 3 === 0);

// 2. An array of Pokemon objects that are "fire" type
const fireTypePokemon = pokemon.filter(p => p.types.includes("fire"));

// 3. An array of Pokemon objects that have more than one type
const multipleTypePokemon = pokemon.filter(p => p.types.length > 1);

// 4. An array with just the names of the Pokemon
const pokemonNames = pokemon.map(p => p.name);

// 5. An array with just the names of Pokemon with an id greater than 99
const pokemonNamesIdGreaterThan99 = pokemon.filter(p => p.id > 99).map(p => p.name);

// 6. An array with just the names of the Pokemon whose only type is "poison"
const poisonOnlyPokemon = pokemon.filter(p => p.types.length === 1 && p.types[0] === "poison").map(p => p.name);

// 7. An array containing just the first type of all Pokemon whose second type is "flying"
const firstTypeOfFlyingPokemon = pokemon.filter(p => p.types[1] === "flying").map(p => p.types[0]);

// 8. A count of the number of Pokemon that are "normal" type
const normalTypeCount = pokemon.filter(p => p.types.includes("normal")).length;

// 9. An array with all Pokemon except the one with id 148
const allPokemonExcept148 = pokemon.filter(p => p.id !== 148);

// 10. An array with all Pokemon, replacing "normal" with "fairy" for Pokemon with id 35
const updatedPokemon = pokemon.map(p => {
    if (p.id === 35) {
        return { ...p, types: p.types.map(type => type === "normal" ? "fairy" : type) };
    }
    return p;
});


console.log("Pokémon with ID divisible by 3:", idDivisibleByThree);
console.log("Fire-type Pokémon:", fireTypePokemon);
console.log("Pokémon with multiple types:", multipleTypePokemon);
console.log("All Pokémon names:", pokemonNames);
console.log("Pokémon names with ID > 99:", pokemonNamesIdGreaterThan99);
console.log("Poison-only Pokémon:", poisonOnlyPokemon);
console.log("First type of Pokémon with flying as second type:", firstTypeOfFlyingPokemon);
console.log("Count of Normal-type Pokémon:", normalTypeCount);
console.log("All Pokémon except ID 148:", allPokemonExcept148);
console.log("Updated Pokémon with ID 35 type change:", updatedPokemon);
