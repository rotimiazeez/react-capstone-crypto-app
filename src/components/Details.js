import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Detail from './Detail';

const Details = () => {
  const state = useSelector((state) => state.value);
  const details = state.map((elem) => (
    <Route path={`/${elem.name}`} key={elem.name} render={() => <Detail detail={elem} />} />
  ));
  return (
    <Switch>
      {details}
    </Switch>
  );
};

export default Details;
