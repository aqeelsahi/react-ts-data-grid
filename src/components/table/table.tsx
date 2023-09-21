import React from 'react';

const tableStyle = `
  .custom-table {
    border-collapse: collapse;
    width: 100%;
  }

  .custom-table th, .custom-table td {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  .custom-table th {
    background-color: #f2f2f2;
  }

  .custom-table tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
const Table = ({ data }: { data: string[][] }): JSX.Element => {
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  const headerRow = data[0];
  const rows = data.slice(1);

  return (
    <div>
      <style>{tableStyle}</style>
      <table className="custom-table">
        <thead>
          <tr>
            {headerRow.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;