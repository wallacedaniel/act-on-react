import React, { useContext } from 'react';
import { TablesContext } from '../../context/tables/tables.context';
import logo from "../../assets/act-on-logo.png";
import './header.styles.scss';

export const Header = () => {

  const [state] = useContext(TablesContext);

  return (
    <div className='header'>
      <div>
        <h1 className='title'>{state.title}</h1>
      </div>
      <div className='logo-container'>
        <img className='logo' src={logo} alt="act-on-logo" />
      </div>
    </div>
  );
};
