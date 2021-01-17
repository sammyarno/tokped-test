/* eslint-disable */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  ReactElement, useCallback, useEffect, useState
} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PokeStat } from '../interfaces/Pokemon';
import ReduxStore from '../interfaces/ReduxStoreState';
import { setErrorMessage } from '../store/account/actions';
import { catchPokemon, checkSameNick, fetchPokeDetail, setCatchLoading } from '../store/pokemon/actions';

type Params = {
  name: string;
};

const Detail = (): ReactElement => {
  const dispatch = useDispatch();
  const { name } = useParams<Params>();
  const [error, setError] = useState('');
  const [modal, setModal] = useState(false);
  const [nickName, setNickName] = useState('');
  const PokeState = useSelector((state: ReduxStore) => state.pokemon);

  const getPokeDetail = useCallback(async () => {
    dispatch(await fetchPokeDetail(name));
  }, [dispatch, name]);

  useEffect(() => {
    getPokeDetail();
  }, [getPokeDetail]);

  const handleCatchClicked = (): void => {
    const random = Math.random();
    setError('');
    dispatch(setCatchLoading(true));

    setTimeout(() => {
      if (random < 0.5) {
        setError('Your pokemon has fleed, try again!');
        dispatch(setCatchLoading(false));
        return;
      }

      dispatch(setCatchLoading(false));

      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });
  
      dispatch(setErrorMessage(''));
      setModal(true);
    }, 2000);
  };

  const handleChangedInput = (e: any): void => {
    setNickName(e.target.value)
  };

  const handleKeyUpInput = (e: any): void => {
    if (e.keyCode === 13) {
      handleCatchedPokemon();
    }
  }

  const handleCatchedPokemon = async (): Promise<void> => {
    setError('');

    if (checkSameNick(PokeState.selected.name, nickName)) {
      setError('Nickname has been registered');
    } else {
      dispatch(await catchPokemon(PokeState.selected.name, nickName));
      setModal(false);
    }
  }

  const types = PokeState.selected.types.map((x) => x.name).join(', ');

  return (
    <div className="detail page">
      {
        PokeState.getDetailLoading
        ? (
          <div className="spinner-container">
            <FontAwesomeIcon icon="spinner" size="2x" spin />
          </div>
        ) :
        (
          <>
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
              {
                error && (
                  <div className="alert">
                    {error}
                  </div>
                )
              }
              <button className="catch-btn" type="button" onClick={handleCatchClicked} disabled={PokeState.catchLoading}>
                <h2>
                  CATCH { PokeState.catchLoading && <FontAwesomeIcon icon="spinner" spin /> }
                </h2>
              </button>
            </div>
          </>
        )
      }
      {/* Modal */}
      {
        modal && (
          <div className="modal">
            <div className="content">
              <div className="close">
                <FontAwesomeIcon icon="times" size="lg" onClick={() => setModal(false)} />
              </div>
              <h3>You've caught a {PokeState.selected.name} !</h3>
              <div className="image-wrapper">
                <img src={PokeState.selected.image || ''} alt="thumbnail" className="image" />
              </div>
              <p>Nickname</p>
              <input type="text" autoFocus onChange={handleChangedInput} onKeyUp={handleKeyUpInput} />
              {
                error && <p className="error"><small>{error}</small></p>
              }
              <button onClick={handleCatchedPokemon}>
                <p><b>SAVE</b></p>
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Detail;
