import React from 'react';
import {Tab} from '../tab/tab.component';
import './tabs-container.styles.scss';

export const TabsContainer = ({tabs}) => {

  return <div className='tabs-container'> {
          tabs.map( (item, index) => (<Tab key={index} item={item} />))
        }</div>;
};


// pass in active
//
