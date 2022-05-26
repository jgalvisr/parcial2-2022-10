import React, {useState, useEffect} from 'react';
import './PokemonList.scss';
import { PokemonRow } from '../../shared/components/PokemonRow';
import { FormattedMessage } from 'react-intl';

export const PokemonList = () => {
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
      // En español no me funciona el API :(
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
      <div className='pokemon-container'>
        <h1><FormattedMessage id="listHeader" /></h1>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'><FormattedMessage id="image" /></th>
              <th scope='col'><FormattedMessage id="name" /></th>
              <th scope='col'><FormattedMessage id="description" /></th>
              <th scope='col'><FormattedMessage id="height" /></th>
              <th scope='col'><FormattedMessage id="weight" /></th>
              <th scope='col'><FormattedMessage id="type" /></th>
            </tr>
          </thead>
          <tbody>
            {pokemons ? pokemons.map(p =>
              <PokemonRow
                key={p.id}
                id={p.id}
                ThumbnailImage={p.ThumbnailImage}
                name={p.name}
                description={p.description}
                height={p.height}
                weight={p.weight}
                type={p.type}
              />) : <FormattedMessage id="loading"/>}
          </tbody>
        </table>
      </div>
    </>
  );
};
