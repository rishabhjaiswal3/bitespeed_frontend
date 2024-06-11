import React from 'react';

const TableComponent = ({ orders }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">email</th>
          <th scope="col">phoneNumber</th>
          <th scope="col">linkPrecedence</th>
          <th scope="col">linkedId</th>
          <th scope="col">updatedAt</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => ( <tr>
            <th scope="row">{order?.id}</th>
            <td>{order.email}</td>
            <td>{order?.phoneNumber}</td>
            <td>{order?.linkPrecedence}</td>
            <td>{order.linkedId}</td>
            <td>{order.updatedAt}</td>
            </tr>
        ) )}
      </tbody>
    </table>
  );
};

export default TableComponent;
