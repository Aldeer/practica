import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useState } from "react";

const initialDB = [
  {
    id: 1,
    name: "Gon Freecss",
    typeNen: "Potenciador",
  },
  {
    id: 2,
    name: "Kurapika",
    typeNen: "Materialización",
  },
  {
    id: 3,
    name: "Killua Zoldyck",
    typeNen: "Transformación",
  },
  {
    id: 4,
    name: "Leorio Paradinight",
    typeNen: "Emisión",
  },
  {
    id: 5,
    name: "Isaac Netero",
    typeNen: "Emisión",
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initialDB);
  const [dataToEdit, setDataToEdit] = useState(null);

  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };

  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <>
      <h2>CRUD APP</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable
        data={db}
        setDataToEdit={setDataToEdit}
        deleteData={deleteData}
      />
    </>
  );
};

export default CrudApp;
