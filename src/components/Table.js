import React from "react";
import data from "../utils/data";

const Table = () => {
  const allData = data.currencies;
  return (
    <table>
      <tr>
        <th>Döviz Cinsi</th>
        <th>Alış(TL)</th>
        <th>Satış(TL)</th>
        <th>Fark(%)</th>
      </tr>
      {allData.map((item) => (
        <>
          <tr>
            <td>{item.exchangeType}</td>
            <td>{item.buy}</td>
            <td>{item.sell}</td>
            <td>{item.diff}</td>
          </tr>
        </>
      ))}
    </table>
  );
};

export default Table;
