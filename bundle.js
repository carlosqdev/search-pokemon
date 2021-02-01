let label = document.querySelector('label');

// renderizar pokemon en la app.
const renderPokemon = (response) => {
  let namePokemon = document.querySelector("h1").innerHTML = response.name;
  let imgPokemon = document.querySelector('img').src = response.sprites.front_default;
  let idPokemon = document.querySelector('h2').innerHTML = response.id;
  label.innerHTML = 'Pokemon encontrado'
}

// Obtener datos.
function getPokemon(idPokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  .then(function(response) {
    if(response.ok) {
      response.json()
      .then((response) => renderPokemon(response));
    } else {
      label.innerHTML = 'Pokemon no encontrado id o nombre no exite'
    }
  })
  .catch(function(error) {
    label.innerHTML = `Hubo un problema con la petición Fetch:${error.message}`;
  });
}

// Buscar pokemon a partir del valor ingresado por el usuario.
function searchPokemon() {
  let input = document.querySelector('input').value

  if (input == "") {
    label.innerHTML = 'Debe escribir un nombre o id';
  }
  else {
    label.innerHTML = 'Pokemon encontrado';
    getPokemon(input);
  }
}

// Escuchar cuando el usuario hace click en el boton.
let button = document.querySelector('#btnBuscar');
button.addEventListener("click", searchPokemon);