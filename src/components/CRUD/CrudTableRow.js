import React from "react";

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
  let { name, typeNen, id } = el;

  return (
    <tr>
      <td>{name}</td>
      <td>{typeNen}</td>
      <td>
        <button onClick={() => setDataToEdit(el)}>Editar</button>
        <button onClick={() => deleteData(id)}>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
