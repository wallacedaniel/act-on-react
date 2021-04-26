import React from 'react';
import {Header} from './components/header/header.component';
import {ContentContainer} from './components/content-container/content-container.component';
import Store from './context/tables/tables.context';

import './App.css';

function App() {

    return(
      <div className='App'>
        <Store>
          <Header></Header>
          <ContentContainer></ContentContainer>
        </Store>
      </div>
    );
}

export default App;
