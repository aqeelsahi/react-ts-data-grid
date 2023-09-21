import React from 'react';

const Table = ({ data }: { data: string[][] }): JSX.Element => {
  return (
    <div>
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="table-row">
          {row.map((cell, cellIndex) => (
            <div key={cellIndex} className="table-cell">
              {cell}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Table;
