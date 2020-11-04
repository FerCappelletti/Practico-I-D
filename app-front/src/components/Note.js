import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getUsers } from "../repository/RepositoryUsers";
import { postNote, editNote, getNote } from "../repository/RepositoryNotes";

function Note(props) {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [idParam, setIdParam] = useState(props.match.params.id ? true : false);
  const [note, setNote] = useState([]);

  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    const res = await getUsers();
    if (res) {
      setUsers(res.data);
    }
  };
console.log(idParam)
  useEffect(async () => {

    if (idParam) {
      const res = await getNote(props.match.params.id)
      setNote(res.data)
    }
  }, []);


  const onSubmit = async (e) => {
    e.preventDefault();
    if (idParam) {
      await editNote({
        username,
        date,
        title,
        description,
        group: "To Do",
        id: props.match.params.id,
      });
    } else {
      const res = await postNote({
        username,
        date,
        title,
        description,
        group: "To Do",
      });
    }
    window.location.href = '/'
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>{ "Crear nueva tarea"}</h4>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            {/* SELECT USER */}
            <label>
              ¿A quién asignará la tarea?
              <i
                className="fas fa-info-circle"
                data-toggle="tooltip"
                data-placement="left"
                title="Elija el usuario a quién quiere asignar la tarea"
              ></i>
            </label>
            <select
              className="form-control"
              name="user"
              value={note.length ? note.username : username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            >
              <option>
                {note.length ? note.username :  "Elije un usuario para asignar una tarea..."}
              </option>
              {users.map((user) => (
                <option key={user.username}>{user.username}</option>
              ))}
            </select>
          </div>

          {/* NOTE FORM */}
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tarea"
              name="title"
              required
              value={note.title ? note.title : title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              placeholder="Descripción"
              name="descripcion"
              required
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              value={note.description ? note.description : description}
            />
          </div>

          <div className="form-group">
            <DatePicker
              className="form-control"
              selected={date}
              onChange={onChangeDate}
            />
          </div>
          <button type="submit" className="btn btn-dark">
            {note.length ? "Editar Tarea" : "Crear Tarea"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
