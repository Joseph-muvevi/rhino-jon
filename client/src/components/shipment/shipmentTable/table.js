// import React, { useState } from "react";
import "../shipment.css";

const tableStyle = {
  border: "1px solid black",
  borderCollapse: "collapse",
  textAlign: "center",
  width: "100%",
};

const tdStyle = {
  border: "1px solid #85C1E9",
  background: "transparent",
  padding: "5px",
};

const thStyle = {
  border: "1px solid #3498DB",
  background: "#3498DB",
  color: "white",
  padding: "5px",
};

const TheTable = ({ data }) => {
  // getKeys

  // const [shipments, setShipments] = useState(data);
  const shipments = data;

  return (
    <div className="the-table">
      {/* {alert(JSON.stringify(data))} */}
      {console.log(shipments, "this is the data shipment")}
      <table style={tableStyle}>
        <tbody>
          <tr>
            <th style={thStyle}>Id</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Company</th>
            <th style={thStyle}>City stored</th>
            <th style={thStyle}>Country Stored</th>
            <th style={thStyle}>Warehouse type</th>
            <th style={thStyle}>Weight</th>
            <th style={thStyle}>Weight unit</th>
            <th style={thStyle}>Product Type</th>
            <th style={thStyle}>Pieces</th>
            <th style={thStyle}>Date in</th>
            <th style={thStyle}>Time in</th>
            <th style={thStyle}>Date out</th>
            <th style={thStyle}>Time out</th>
            <th style={thStyle}>Notes</th>
          </tr>
          {shipments.map(
            ({
              id,
              fullnames,
              company,
              storagecity,
              storagecountry,
              warehousetype,
              weight,
              weightunit,
              producttype,
              pieces,
              datein,
              intime,
              dateout,
              outtime,
              notes,
            }) => (
              <tr key={id}>
                <td style={tdStyle}>{id}</td>
                <td style={tdStyle}>{fullnames}</td>
                <td style={tdStyle}>{company}</td>
                <td style={tdStyle}>{storagecity}</td>
                <td style={tdStyle}>{storagecountry}</td>
                <td style={tdStyle}>{warehousetype}</td>
                <td style={tdStyle}>{weight}</td>
                <td style={tdStyle}>{weightunit}</td>
                <td style={tdStyle}>{producttype}</td>
                <td style={tdStyle}>{pieces}</td>
                <td style={tdStyle}>{datein}</td>
                <td style={tdStyle}>{intime}</td>
                <td style={tdStyle}>{dateout}</td>
                <td style={tdStyle}>{outtime}</td>
                <td style={tdStyle}>{notes}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TheTable;
