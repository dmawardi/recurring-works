import React from "react";
import "./style.css";

function TableHeader() {
  return (
    <thead>
      <tr>
        <th scope="col">Equipment ID</th>
        <th scope="col">Equipment Name</th>
        <th scope="col">Add new event</th>
        <th scope="col">January</th>
        <th scope="col">February</th>
        <th scope="col">March</th>
        <th scope="col">April</th>
        <th scope="col">May</th>
        <th scope="col">June</th>
        <th scope="col">July</th>
        <th scope="col">August</th>
        <th scope="col">September</th>
        <th scope="col">October</th>
        <th scope="col">November</th>
        <th scope="col">December</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
