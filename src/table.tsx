import React from 'react';

const Table = (data: string[][]): any => {
  return (
    <div>
      {data.map(row => {
        return <div>{row}</div>;
      })}
    </div>
  );
};

export default Table;
