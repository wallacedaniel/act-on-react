import React, { useContext } from 'react';
import { TablesContext } from '../../context/tables/tables.context';
import './tab.styles.scss';

export const Tab = ({item}) => {

  const [state, setState] = useContext(TablesContext);

  const selectTab = (e) => {
    // sets active tab to value of selected tab and creates new object, triggering render
    state.activeTab = e.target.textContent;
    const stateUpdate = Object.create(state);
    setState(stateUpdate);
  };

  return (
      <p className={`${state.activeTab === item ? 'active-page-tab' : ''} page-tab`} onClick={selectTab}>{item}</p>
  );
};
