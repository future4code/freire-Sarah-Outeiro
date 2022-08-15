//exercicio 4
//a) 
type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}


//b) tsc exercicio4.ts && node ./build/index.js

//c) tsc ./src/exercicio4.ts && node ./build/index.js

//d) tsc ./src/exercicio4.ts && tsc ./src/exercicio3.ts && tsc ./src/exercicio2.ts && tsc ./src/exercicio1.ts && node ./build/index.js
