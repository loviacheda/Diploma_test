import React from "react";
import "./RoomTable.css";

export const Table = ({ rows }) => {
  return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th className="expand">Reference</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            return (
              <tr key={idx}>
                <td>{row.name}</td>
                <td> {row.reference}</td>
                <td>{row.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
  );
};
