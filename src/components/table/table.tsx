import React, { CSSProperties } from 'react';
import { generateCSV } from 'react-make-csv';
import './table.css';

const Table = ({
  data,
  exportCSV,
  headerStyle,
  bodyStyle,
  hoverColor,
}: {
  data: string[][];
  exportCSV?: boolean;
  headerStyle?: CSSProperties;
  bodyStyle?: CSSProperties;
  hoverColor?: string;
}): JSX.Element => {
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  const headerRow = data[0];
  const rows = data.slice(1);

  const downloadCSV = () => generateCSV(data, 'myfile');

  return (
    <div>
      <div className="toolbar">
        {exportCSV && (
          <div className="link" onClick={downloadCSV}>
            Export
          </div>
        )}
      </div>
      <table className="custom-table">
        <thead style={headerStyle}>
          <tr>
            {headerRow.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody style={bodyStyle}>
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
