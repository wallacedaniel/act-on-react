import React, { useState } from 'react';

import TABLES_DATA from './tables.data';

const initialState = TABLES_DATA;

export const TablesContext = React.createContext();

const Store = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <TablesContext.Provider value={[state, setState]}>{children}</TablesContext.Provider>
  );
};

export default Store;
