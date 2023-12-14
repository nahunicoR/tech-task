
export const pokemonsData = async () => {
   const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
   const data = await res.json();
   const promises = await data.results.map(async poke =>{
      const res = await fetch(poke.url)
      const data = await res.json()
      return data
   });
   const results = await Promise.all(promises);
   return results;
} 


export const getPokemons = async (limit=50) => {
   const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${0}`);
   const data = await res.json();
   const promises = await data.results.map(async poke =>{
      const res = await fetch(poke.url)
      const data = await res.json()
      return data
   });
   const results = await Promise.all(promises);
   return results
}