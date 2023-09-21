// import React from 'react';

// const Table = ({ data }: { data: string[][] }): JSX.Element => {
//   return (
//     <div>
//       {data.map((row, rowIndex) => (
//         <div key={rowIndex} className="table-row">
//           {row.map((cell, cellIndex) => (
//             <div key={cellIndex} className="table-cell">
//               {cell}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Table;
import React from 'react';
import './style.css';

const Table = ({ data }: { data: string[][] }): JSX.Element => {
  if (data.length === 0) {
    return <div>No data available.</div>;
  }

  const headerRow = data[0];
  const rows = data.slice(1);

  return (
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
  );
};

export default Table;
