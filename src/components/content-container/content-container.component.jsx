
import React, { useContext } from 'react';
import { TablesContext } from '../../context/tables/tables.context';
import {TabsContainer} from '../tabs-container/tabs-container.component';
import {CustomTable} from '../custom-table/custom-table.component';
import './content-container.styles.scss';

export const ContentContainer = () => {

  const [state] = useContext(TablesContext);

  const tabOptions = state.mascots.map(item => item.type);
  const tabs = [...new Set(tabOptions)];

  return <div className='content-container'>
    <TabsContainer tabs={tabs}></TabsContainer>
    <CustomTable tableData={state}></CustomTable>
  </div>;
};
