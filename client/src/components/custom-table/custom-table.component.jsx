import React from 'react';
import './custom-table.styles.scss';

export const CustomTable = ({tableData}) => {

  const data = tableData.data;
  const activeTab = tableData.activeTab;

  // derives appropriate table header categories based on tab type
  // no longer necessary...previous project submission included varieties in category name based on tab type
  let tableKeys;

  for (const el of data) {
    const { type } = el;
    if(type === activeTab){
       tableKeys = Object.keys(el);
       break;
    };
  }

  // removes the "type" prop's value from the table headers
  tableKeys.forEach((key, index) => {
    if (key === 'type') {
        tableKeys.splice(index, 1);
    }}
  );

  // returns td values based on position rather than property name. also to handle previous variety in categories
  return (
      <table>
        <thead>
          <tr>
            {
              tableKeys.map(( keyValue, index) => (<th className='category' key={index}>{keyValue.toUpperCase()}</th>))
            }
          </tr>
        </thead>
        <tbody>
          {
            data.map(( item, index) => {
              let tableRow;
              (activeTab === item.type) ?
              (tableRow = <tr key={index}>
                <td>{item[tableKeys[0]]}</td>
                <td>{item[tableKeys[1]]}</td>
                <td>{item[tableKeys[2]]}</td>
              </tr>) :
              (tableRow = null);
              return tableRow;
            })
          }
        </tbody>
      </table>
  );
};
