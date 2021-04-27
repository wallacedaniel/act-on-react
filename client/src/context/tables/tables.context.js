import React, { useState, useEffect } from 'react';

import TABLES_DATA from './tables.data';
const initialState = TABLES_DATA;

export const TablesContext = React.createContext();

const Store = ({ children }) => {

  const [state, setState] = useState(initialState);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch('/api/tables');
      const data = await result.json()
      console.log(data);
      setState(data);
    }
    fetchData();
  }, []);

  return (
    <TablesContext.Provider value={[state, setState]}>{children}</TablesContext.Provider>
  );
};

export default Store;
