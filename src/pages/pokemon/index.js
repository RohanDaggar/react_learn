import React, {useState , useEffect} from 'react';
import PokemonList from './pokemonList';
import Pagination from './pagination';
import axios from 'axios';

// https://www.youtube.com/watch?v=o3ZUc7zH8BE for tutorial

function Pokemon() {
    const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
    const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
    const [nextPageUrl, setNextPageUrl] = useState()
    const [prevPageUrl, setPrevPageUrl] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        let cancel
        axios.get(currentPageUrl, {
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
            setLoading(false)
            setNextPageUrl(res.data.next)
            setPrevPageUrl(res.data.previous)
            setPokemon(res.data.results.map(p => p.name))
        })

        return () => cancel()
    }, [currentPageUrl])

    function gotoNextPage() {
        setCurrentPageUrl(nextPageUrl)
    }
    function gotoPrevPage() {
        setCurrentPageUrl(prevPageUrl)
    }

    if (loading) return "Loading..."

  return (
    <div>
      <h1>Pokemon Page</h1>
        <PokemonList pokemon={pokemon} />
        <Pagination 
            gotoNextPage={nextPageUrl ? gotoNextPage : null}
            gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
        />
    </div>
  )
}

export default Pokemon;