import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, {
  ReactElement, useEffect, useState
} from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import { GET_POKEMONS } from '../consts/Queries';
import { PokeGql, PokeSimpleGql, PokeStorageData } from '../interfaces/Pokemon';
import ReduxStore from '../interfaces/ReduxStoreState';
import { GlobalListParams } from '../interfaces/ResReqModel';
import { extractUrl } from '../utils/Formatter';

const Home = (): ReactElement => {
  const history = useHistory();
  const [params, setParams] = useState<GlobalListParams>({
    limit: 24,
    offset: 0
  });
  const AccountState = useSelector((state: ReduxStore) => state.account);
  const [getPokes, { loading, data, error }] = useLazyQuery<PokeGql, any>(GET_POKEMONS, {
    variables: {
      limit: params.limit,
      offset: params.offset
    }
  });

  useEffect(() => {
    getPokes();
  }, [getPokes]);

  const handlePrevClicked = (): void => {
    setParams(extractUrl(data?.pokemons.previous || ''));
    getPokes();
  };

  const handleNextClicked = (): void => {
    setParams(extractUrl(data?.pokemons.next || ''));
    getPokes();
  };

  const handlePokemonClicked = async (name: string): Promise<void> => {
    history.push(`/pokemon/${name}`);
  };

  return (
    <div className="home page">
      <div className="title">
        <h2>Pokémon List</h2>
        <small>Owned Total: {AccountState.total}</small>
      </div>
      <div className="list">
        {
          loading
            ? (
              <div className="spinner-container">
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
                        {
                        data.pokemons.results.map((poke: PokeSimpleGql, index) => (
                          <div className="item" key={index} role="presentation" onClick={() => handlePokemonClicked(poke.name)}>
                            <div className="image-wrapper">
                              <img src={poke.image} alt="poke" />
                            </div>
                            <p className="name">{poke.name}</p>
                            <p className="status">
                              <small className="text-muted">
                                Owned: {
                                  AccountState.data.filter((x: PokeStorageData) => x.name === poke.name).length > 0
                                    ? AccountState.data.filter((x: PokeStorageData) => x.name === poke.name)[0].nicknames.length
                                    : 0
                                }
                              </small>
                            </p>
                          </div>
                        ))
                      }
                      </>
                    )
                }
              </>
            )
        }
      </div>
      <div className="extra">
        <button className="prev" type="button" disabled={!data?.pokemons.previous} onClick={handlePrevClicked}>
          <FontAwesomeIcon icon="chevron-left" size="2x" />
        </button>
        <button className="next" type="button" disabled={!data?.pokemons.next} onClick={handleNextClicked}>
          <FontAwesomeIcon icon="chevron-right" size="2x" />
        </button>
      </div>
    </div>
  );
};

export default Home;
