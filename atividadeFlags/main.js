import bandeiras from './modelFlags.js';

const main = document.querySelector('main');

for (const bandeira of bandeiras) {
  main.insertAdjacentHTML('beforeend', criaVisualizacaoBandeira(bandeira));
}

function criaVisualizacaoBandeira(bandeira) {
  return `<div class="flag col-2 my-2 text-center">
    <img src="${bandeira.image}" alt="${bandeira.name}">
    <p>${bandeira.name}</p>
  </div>`;
}