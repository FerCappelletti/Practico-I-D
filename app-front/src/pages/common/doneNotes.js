import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  $deleteNote,
  editNote,
  getNotes,
  editGroup,
  postNote,
  gotToProgress,
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
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-4 p-2" key={note._id}>
          <div className={"card-body bg-success text-white"}>
            <h5>{note.group}</h5>
          </div>
          <div className="card-body">
            <h6>Título: {note.title}</h6>
            <p>{note.description}</p>
            <p className="card-subtitle mb-3 text-dark">
              Asignada a: <b>{note.username}</b>
            </p>
            <p className="card-subtitle mb-3 text-dark">
              <b>{moment(note.date).fromNow()}</b>
            </p>
          </div>
          <div className="card-footer d-flex justify-content-around align-items-baseline">
            <i
              className="fas fa-trash"
              data-toggle="tooltip"
              data-placement="left"
              title="Ésta acción eliminará la nota"
              onClick={(e) => {
                onClick(note._id, e, 'Deleted');
              }}
            ></i>
            <Link
              className="fas fa-edit"
              data-toggle="tooltip"
              data-placement="left"
              title="Editar tarea"
              to={"/edit/" + note._id}
            ></Link>
          </div>
        </div>
      ))}
    </div>
  );
}
export default DoneNotes;
