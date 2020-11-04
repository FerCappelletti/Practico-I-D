import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import { getNotes } from "../../repository/RepositoryNotes";

function DeletedNotes() {
  moment.locale("es");

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    allNotes();
  }, []);

  const allNotes = async () => {
    const res = await getNotes({ group: "Deleted" });
    setNotes(res.data);
  };

  return (
    <div className="row mt-5">
      <div className={"card-body bg-danger text-white"}>
        <h5>{"DELETED"}</h5>
      </div>
      {notes.length ? (
        notes.map((note) => (
          <div className="col-sm-12 pb-2" key={note._id}>
            <div className="card-body">
              <h5 className="card-header">Título: {note.title}</h5>
              <p>
                <b>Descripción: </b>
                {note.description}
              </p>
              <p className="card-subtitle mb-3 text-dark">
                <b>Asignada a:</b> {note.username}
              </p>
              <p className="card-subtitle mb-3 text-dark">
                <b>Eliminada: </b>
                {moment(note.date).fromNow()}
              </p>
            </div>
          </div>
        ))
      ) : (
        <div className="container">
          <h2>No hay tareas eliminadas</h2>
        </div>
      )}
    </div>
  );
}
export default DeletedNotes;
