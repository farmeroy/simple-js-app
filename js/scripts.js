let pokemonList = [];

pokemonList = [
  {
    name: "Bulbasaur",
    height: 0.7,
    types: ["grass", "poison"],
  },
  {
    name: "Venusaur",
    height: 2,
    types: ["grass", "poison"],
  },
  {
    name: "Chinchou",
    height: 0.5,
    types: ["electric", "water"],
  },
];


for (let i=0; i<pokemonList.length; i++) {
    document.write(`<p>${pokemonList[i].name}</p>`)
}