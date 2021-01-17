import React, { ReactElement, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPokeDetail } from '../store/pokemon/actions';

type Params = {
  name: string;
};

const Detail = (): ReactElement => {
  const dispatch = useDispatch();
  const { name } = useParams<Params>();

  const getPokeDetail = useCallback(async () => {
    dispatch(await fetchPokeDetail(name));
  }, [dispatch, name]);

  useEffect(() => {
    getPokeDetail();
  }, [getPokeDetail]);

  return (
    <div>
      asd
    </div>
  );
};

export default Detail;
