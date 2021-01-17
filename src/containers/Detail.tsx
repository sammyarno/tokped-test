import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PokeStat } from '../interfaces/Pokemon';
import ReduxStore from '../interfaces/ReduxStoreState';
import { fetchPokeDetail } from '../store/pokemon/actions';

type Params = {
  name: string;
};

const Detail = (): ReactElement => {
  const dispatch = useDispatch();
  const { name } = useParams<Params>();
  const PokeState = useSelector((state: ReduxStore) => state.pokemon);

  const getPokeDetail = useCallback(async () => {
    dispatch(await fetchPokeDetail(name));
  }, [dispatch, name]);

  useEffect(() => {
    getPokeDetail();
  }, [getPokeDetail]);

  const handleCatchClicked = (): void => {
    console.log(Math.random() < 0.5);
  };

  const types = PokeState.selected.types.map((x) => x.name).join(', ');

  return (
    <div className="detail page">
      <div className="image-wrapper">
        <img src={PokeState.selected.image || ''} alt="thumbnail" className="image" />
      </div>
      <div className="title">
        <h2>{PokeState.selected.name}</h2>
        <p>{types}</p>
      </div>
      <div className="status section">
        <h3>Status</h3>
        <div className="list">
          {
            PokeState.selected.stats.map((status: PokeStat, index: number) => (
              <div className="item" key={index}>
                <p>{status.name}</p>
                <p className="value"><b>{status.value}</b></p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="moves section">
        <h3>Moves</h3>
        <div className="list">
          {
            PokeState.selected.moves.map((move: string, index: number) => (
              <div className="item" key={index}>
                <p>{move}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className="extra">
        <button className="catch-btn" type="button" onClick={handleCatchClicked}>
          <h2>CATCH</h2>
        </button>
      </div>
    </div>
  );
};

export default Detail;
