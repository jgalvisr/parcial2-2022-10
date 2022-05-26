import React, {useState, useEffect} from 'react';
import { FormattedMessage } from 'react-intl';
import { BarPlot } from '../../shared/components/BarPlot';

export const PokemonReport = () => {
  const API = {
    "es": "https://gist.githubusercontent.com/jhonatan89/e379fadf8ed0f5381a2d8f8f3dea90c3/raw/b8bef31733d080df9ebcdb664fce078ec9a3dac9/pokemon-es.json",
    "en-US": "https://gist.githubusercontent.com/jhonatan89/2089276d3ce0faceff8e55fc3459b818/raw/30ee1a77b3e328108faaaa9aaac6f2ddaa3d3711/pokemons-en.json"
  }

  const [pokemons, setPokemons] = useState(null); 

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("pokemons") == null) {
        setPokemons(null);
      }
      else {
        setPokemons(JSON.parse(localStorage.getItem("pokemons")));
      }
    }
    else {
      console.log(API[navigator.language]);
      fetch(API[navigator.language])
      .then(resp => resp.json())
      .then(data => {
        setPokemons(data);
        localStorage.setItem("pokemons", JSON.stringify(data));
      });
    }
  }, []);

  return (
    <>
      <h1><FormattedMessage id="reportHeader"/></h1>
      {pokemons ? 
        <BarPlot data={pokemons}></BarPlot> : <></>
      }
    </>
  )
}