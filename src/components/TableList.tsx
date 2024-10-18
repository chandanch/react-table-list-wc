import React from "react";

type TableListProps = {
  data: Array<{ [key: string]: string | number }>;
  columns: Array<string>;
};

const TableList: React.FC<TableListProps> = ({ data, columns }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
