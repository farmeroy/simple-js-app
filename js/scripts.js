

const pokemonRepository = (function () {
  let pokemonList = [];
  const apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  // pokemonList = [
  //   {
  //     name: "Bulbasaur",
  //     height: 0.7,
  //     types: ["grass", "poison"],
  //   },
  //   {
  //     name: "Venusaur",
  //     height: 2,
  //     types: ["grass", "poison"],
  //   },
  //   {
  //     name: "Chinchou",
  //     height: 0.5,
  //     types: ["electric", "water"],
  //   },
  // ];

  const add = function (pokemon) {
    
    //error handling must be updated
    // const keys = Object.keys(pokemon);
    // if (keys[0] !== "name" || keys[1] !== "height" || keys[2] !== "types") {
    //   return console.log(
    //     "pokemon must be an object with keys name, height, types (array)"
    //   );
    // }
    // if (typeof pokemon !== "object" || typeof pokemon.types !== "object") {
    //   return console.log(
    //     "pokemon must be an object with keys name, height, types (array)"
    //   );
    // }
    pokemonList.push(pokemon);
  };

  //search for a pokemon by name
  const find = function (name) {
    return pokemonList.filter(function (pokemon) {
      return pokemon.name.toLowerCase() === name.toLowerCase();
    });
  };

  //returns a list of all the pokemon
  const getAll = function () {
    return pokemonList;
  };

  // log a pokemon's name to the console
  const showDetails = function (pokemon) {
    console.log(pokemon.name);
  };

  //renders a pokemon object to the DOM
  const addListItem = function (pokemon) {
    const ulElement = document.querySelector(".pokemon-list");
    const listElement = document.createElement("li");
    const pokemonButton = document.createElement("button");

    pokemonButton.innerText = pokemon.name;
    pokemonButton.addEventListener("click", showDetails.bind(null, pokemon));

    pokemonButton.classList.add("pokemon");
    listElement.classList.add("pokemon-list__item");

    listElement.appendChild(pokemonButton);
    ulElement.appendChild(listElement);
  };

  const loadList = function () {
    return fetch(apiUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
          };
          add(pokemon);
        });
      })
      .catch(function (e) {
        console.error(e);
      });
  };

  return {
    getAll: getAll,
    add: add,
    find: find,
    addListItem: addListItem,
    loadList: loadList
  };
})();




pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
