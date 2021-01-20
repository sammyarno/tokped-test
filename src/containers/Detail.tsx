import { useLazyQuery } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  ReactElement, useCallback, useEffect, useState
} from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { GET_POKEMON } from '../consts/Queries';
import { PokeGql, PokeGqlMove, PokeGqlStatus } from '../interfaces/Pokemon';
import { catchPokemon, checkSameNick, fetchPokeDetail } from '../store/pokemon/actions';

type Params = {
  name: string;
};

const Detail = (): ReactElement => {
  const dispatch = useDispatch();
  const { name } = useParams<Params>();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [modal, setModal] = useState(false);
  const [catchLoading, setCatchLoading] = useState(false);
  const [nickName, setNickName] = useState('');

  const [getPoke, { loading, data, error }] = useLazyQuery<PokeGql, any>(GET_POKEMON, {
    variables: {
      name
    }
  });

  const getPokeDetail = useCallback(async () => {
    dispatch(await fetchPokeDetail(name));
  }, [dispatch, name]);

  useEffect(() => {
    getPokeDetail();
    getPoke();
  }, [getPokeDetail]);

  const handleCatchClicked = (): void => {
    const random = Math.random();
    setErrorMessage('');
    setSuccessMessage('');
    setCatchLoading(true);

    setTimeout(() => {
      if (random < 0.5) {
        setErrorMessage('Your pokemon has fleed, try again!');
        setCatchLoading(false);
        return;
      }

      setCatchLoading(false);

      window.scrollTo({
        behavior: 'smooth',
        top: 0
      });

      setErrorMessage('');
      setModal(true);
    }, 2000);
  };

  const handleCatchedPokemon = async (): Promise<void> => {
    setErrorMessage('');

    if (checkSameNick(name, nickName)) {
      setErrorMessage('Nickname has been registered');
    } else {
      dispatch(await catchPokemon(name, nickName));
      setSuccessMessage('See your new pokémon in myPoke');

      setTimeout(() => {
        setSuccessMessage('');
      }, 3000);
      setModal(false);
    }
  };

  const handleChangedInput = (e: any): void => {
    setNickName(e.target.value);
  };

  const handleKeyUpInput = (e: any): void => {
    if (e.keyCode === 13) {
      handleCatchedPokemon();
    }
  };

  const types = data?.pokemon.types.map((x) => x.type.name).join(', ');

  return (
    <div className="detail page">
      {
        successMessage && (
          <div className="alert success">
            {successMessage}
          </div>
        )
      }
      {
        !data || loading
          ? (
            <div className="spinner-container text-center">
              <FontAwesomeIcon icon="spinner" size="2x" spin />
            </div>
          ) : (
            <>
              {
                !data || error
                  ? (
                    <>
                      <p className="text-center text-danger">Fetch Error</p>
                    </>
                  ) : (
                    <>
                      <div className="image-wrapper">
                        <img src={data.pokemon.image.front_default || ''} alt="thumbnail" className="image" />
                      </div>
                      <div className="title">
                        <h2>{data.pokemon.name}</h2>
                        <p>{types}</p>
                      </div>
                      <div className="status section">
                        <h3>Status</h3>
                        <div className="list">
                          {
                            data.pokemon.statuses.map((status: PokeGqlStatus, index: number) => (
                              <div className="item" key={index}>
                                <p>{status.stat.name}</p>
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
                            data.pokemon.moves.map((move: PokeGqlMove, index: number) => (
                              <div className="item" key={index}>
                                <p>{move.move.name}</p>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                      <div className="extra">
                        {
                          errorMessage && (
                            <div className="alert">
                              {errorMessage}
                            </div>
                          )
                        }
                        <button className="catch-btn" type="button" onClick={handleCatchClicked} disabled={catchLoading}>
                          <h2>
                            CATCH { catchLoading && <FontAwesomeIcon icon="spinner" spin /> }
                          </h2>
                        </button>
                      </div>
                    </>
                  )
              }
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
              <h3>You&apos;ve caught a {name} !</h3>
              <div className="image-wrapper">
                <img src={data?.pokemon.image.front_default || ''} alt="thumbnail" className="image" />
              </div>
              <p>Nickname</p>
              <input type="text" autoFocus onChange={handleChangedInput} onKeyUp={handleKeyUpInput} />
              {
                errorMessage && <p className="error"><small>{errorMessage}</small></p>
              }
              <button type="button" onClick={handleCatchedPokemon}>
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
