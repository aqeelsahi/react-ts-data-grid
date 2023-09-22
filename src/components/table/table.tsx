import React, { CSSProperties } from 'react';
import { generateCSV } from 'react-make-csv';

const tableStyle = `
.custom-table {
  border-collapse: collapse;
  width: 100%;
  color: '#847577';
}

.custom-table th,
.custom-table td {
  border: 1px solid #847577;
  text-align: left;
  padding: 8px;
}

/* .custom-table th {
        background-color: #f2f2f2;
    }
   
    .custom-table tr:nth-child(even) {
        background-color: rgba(0, 0, 0, 0.3);
    } 
 */
.custom-table tr:hover {
  background-color: #e5e6e4;
}

.toolbar {
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 8px 0px;
}

.link {
  text-decoration: underline;
  color: #847577;
  cursor: pointer;
}
.link:hover {
  color: blue;
}

`;
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
      <style>{tableStyle}</style>
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
