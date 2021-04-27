import React, { useContext } from 'react';
import { TablesContext } from '../../context/tables/tables.context';
import './tab.styles.scss';

export const Tab = ({item}) => {

  const [state, setState] = useContext(TablesContext);

  const selectTab = (e) => {

    state.activeTab = e.target.textContent;
    const stateUpdate = Object.create(state);
    setState(stateUpdate);
  };

  return (
    <div className={`${state.activeTab === item ? 'active' : ''} tab`}>
      <h2 onClick={selectTab}>{item}</h2>
    </div>
  );
};
