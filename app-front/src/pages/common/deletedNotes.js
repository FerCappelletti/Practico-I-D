import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import {
  getNotes
} from "../../repository/RepositoryNotes";

function DoneNotes() {
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
    <div className="row">
      {notes.map((note) => (
        <div className="col-md-4 p-2" key={note._id}>
          <div className={"card-body bg-danger text-white"}>
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
        </div>
      ))}
    </div>
  );
}
export default DoneNotes;
