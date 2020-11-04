import React, { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/es";

import {
  getNotes,
  editGroup
} from "../../repository/RepositoryNotes";

function DoneNotes() {
  moment.locale("es");

  const [notes, setNotes] = useState([]);

  useEffect(() => {
    allNotes();
  }, []);

  const allNotes = async () => {
    const res = await getNotes({ group: "Done" });
    setNotes(res.data);
  };

  const onClick = async (_id, e, group) => {
    e.preventDefault();
    const res = await editGroup({ _id, group: group});
    if ((res.status = 200)) {
       window.location.href = "/";
    }
  };

  return (
    <div className="col p-2">
      {notes.map((note) => (
        <div className="col-sm-12 mb-5" key={note._id}>
          <div className={"card-body bg-success text-white"}>
            <h5>{note.group}</h5>
          </div>
          <div className="card-body">
            <h5>
              <b>Título: </b>
              {note.title}
            </h5>
            <p>
              <b>Descripción: </b>
              {note.description}
            </p>
            <p className="card-subtitle mb-3 text-dark">
              <b>Asignada a:</b> {note.username}
            </p>
            <p className="card-subtitle mb-3 text-dark">
              <b>Terminada: </b>
              {moment(note.date).fromNow()}
            </p>
          </div>
          <div className="card-footer d-flex justify-content-around align-items-baseline">
            <i
              className="fas fa-trash"
              data-toggle="tooltip"
              data-placement="left"
              title="Ésta acción eliminará la nota"
              onClick={(e) => {
                onClick(note._id, e, "Deleted");
              }}
            ></i>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DoneNotes;
