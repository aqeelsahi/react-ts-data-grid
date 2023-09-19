import React, { ReactElement } from 'react';

const Table = (data: string[][]): ReactElement => {
  return (
    <div>
      {data.map(row => {
        return <div>{row}</div>;
      })}
    </div>
  );
};

export default Table;
