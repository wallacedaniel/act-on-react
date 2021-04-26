import React from 'react';
import './custom-table.styles.scss';

export const CustomTable = ({tableData}) => {

  const mascots = tableData.mascots;
  const activeTab = tableData.activeTab;

  const tableKeys = Object.keys(mascots[0]);
  tableKeys.forEach((key, index) => {
    if (key === 'type') {
        tableKeys.splice(index, 1);
    }}
  );

  return <div className='custom-table'>
    <div className='table-wrapper'>
    <table>
      <thead>
        <tr>
          {
            tableKeys.map(( keyValue, index) => (<th key={index}>{keyValue.toUpperCase()}</th>))
          }
        </tr>
      </thead>
      <tbody>
          {
             mascots.map(( item, index) => {
               let tableRow;
               (activeTab === item.type) ?
               (tableRow = <tr key={index}><td>{item.name}</td><td>{item.team}</td><td>{item.category}</td></tr>) : (tableRow = null);
               return tableRow;
             })
          }
      </tbody>
    </table>
    </div>
  </div>
};
