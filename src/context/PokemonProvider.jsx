import {PokemonContext} from './PokemonContext.jsx';
import { useState, useEffect } from 'react';

export const PokemonProvider = ({children}) => {
    const [offset, setOffset] = useState(0)
    const [allPokemons, setAllPokemons] = useState([])
    const [loading, setLoading] = useState(true)
    
    const getAllPokemons = async (limit=24) => {
        setLoading(true)
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
        const data = await res.json();
        const promises = await data.results.map(async poke =>{
           const res = await fetch(poke.url)
           const data = await res.json()
           return data
        });
        const results = await Promise.all(promises);
        setAllPokemons([...allPokemons,...results])
        setLoading(false)
    }

    const onClickLoad = () =>{
        setLoading(true)
        setOffset(offset + 24)

    }

    useEffect(()=>{
        setTimeout(()=>{
            getAllPokemons()
        },2500);
    },[offset]);

    return(
        <PokemonContext.Provider value={{
            allPokemons,
            loading,
            setLoading,
            onClickLoad
        }}>
            {children}
        </PokemonContext.Provider>
    );
};