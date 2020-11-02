import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getUsers } from "../repository/RepositoryUsers";
import { postNote } from "../repository/RepositoryNotes";

function Note() {
  const [users, setUsers] = useState([]);
  const [username, setUserName] = useState("");
  const [date, setDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    const res = await getUsers();
    if (res) {
      setUsers(res.data);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postNote({ username, date, title, description});
    console.log(res);
    if (res.status === 201) {
      window.location.href= '/'
    }
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  return (
    <div className="col-md-6 offset-md-3">
      <div className="card card-body">
        <h4>Crear nueva tarea</h4>
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
              value={username}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            >
              <option>Elije un usuario para asignar una tarea...</option>
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
              value={title}
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
              value={description}
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
            Crear Tarea
          </button>
        </form>
      </div>
    </div>
  );
}

export default Note;
