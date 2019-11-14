import React from "react";
// import axios from "axios";

function EquipmentDetailRow(props) {
  return (
    <tr key={props.equipment_id}>
      <th
        scope="row"
        data-name="equipment"
        data-id={props.equipment_id}
        onClick={props.onClick}
      >
        {props.equipment_name}
      </th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
  );
}

export default EquipmentDetailRow;
