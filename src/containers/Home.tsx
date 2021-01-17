/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ReactElement, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PokeSimple } from '../interfaces/Pokemon';
import ReduxStore from '../interfaces/ReduxStoreState';
import { GlobalListParams } from '../interfaces/ResReqModel';
import { fetchPokemons } from '../store/pokemon/actions';
import { extractUrl } from '../utils/Formatter';

const Home = (): ReactElement => {
  const dispatch = useDispatch();
  const PokeState = useSelector((state: ReduxStore) => state.pokemon);

  const [params, setParams] = useState<GlobalListParams>({
    limit: 24,
    offset: 0
  });

  const getPokemons = useCallback(async () => {
    dispatch(await fetchPokemons(params))
  }, [dispatch, params]);

  useEffect(() => {
    getPokemons();
  }, [getPokemons]);
  
  const handlePrevClicked = (): void => {
    setParams(extractUrl(PokeState.meta.previous || ''));
    getPokemons();
  }

  const handleNextClicked = (): void => {
    setParams(extractUrl(PokeState.meta.next || ''));
    getPokemons();
  }

  return (
    <div className="home page">
      <h2 className="title">
        Pokémon List
      </h2>
      <div className="list">
        {
          PokeState.getLoading
          ? (
            <div className="spinner-container">
              <FontAwesomeIcon icon="spinner" size="2x" spin />
            </div>
          ) : (
            <>
             {
               PokeState.data.map((poke: PokeSimple, index) => (
                 <div className="item" key={index}>
                   <p className="name">{poke.name}</p>
                   <p className="status">
                     <small className="text-muted">
                       Owned: 1
                     </small>
                   </p>
                 </div>
               ))
             }
            </>
          )
        }
      </div>
      <div className="extra">
        <button className="prev" disabled={!PokeState.meta.previous} onClick={handlePrevClicked}>
          <FontAwesomeIcon icon="chevron-left" size="2x" />
        </button>
        <button className="next" disabled={!PokeState.meta.next} onClick={handleNextClicked}>
          <FontAwesomeIcon icon="chevron-right" size="2x" />
        </button>
      </div>
    </div>
  )
}

export default Home;