import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { PokeStorageData } from '../interfaces/Pokemon';
import ReduxStore from '../interfaces/ReduxStoreState';

const Account = (): ReactElement => {
  const history = useHistory();
  const AccountState = useSelector((state: ReduxStore) => state.account);

  const handlePokemonClicked = async (name: string): Promise<void> => {
    history.push(`/pokemon/${name}`);
  };

  return (
    <div className="mypoke page">
      <div className="title">
        <h2>MyPoké List</h2>
      </div>
      <div className="list">
        {
          AccountState.data.map((poke: PokeStorageData) => (
            <>
              {
                poke.nicknames.map((nickname: string) => (
                  <div className="item" key={nickname} role="presentation" onClick={() => handlePokemonClicked(poke.name)}>
                    <p className="nickname">{nickname}</p>
                    <p className="name">
                      <b>{poke.name}</b>
                    </p>
                  </div>
                ))
              }
            </>
          ))
        }
      </div>
    </div>
  );
};

export default Account;
