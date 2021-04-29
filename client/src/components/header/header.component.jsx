import React, { useContext } from 'react';
import { TablesContext } from '../../context/tables/tables.context';
import './header.styles.scss';

export const Header = () => {

  const [state] = useContext(TablesContext);

  return (
    <div className='header-container'>
        <h1 className='page-header'>{state.title}</h1>
    </div>
  );
};
