import React, { useEffect, useState } from "react";
import { getUsers, postUser, $deleteUser } from "../repository/RepositoryUsers";

function Users() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    allUsers();
  }, []);

  const allUsers = async () => {
    const res = await getUsers();
    setUsers(res.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await postUser(username);

    if ((res.status = "201")) {
      getUsers();
    }
    setUsername("");
  };

  const onClick = async (_id, e) => {
    e.preventDefault();
    const res = await $deleteUser(_id);
    if ((res.status = 200)) {
      return (
        <div class="modal" id="myModal">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h4 class="modal-title">Está seguro de eliminar el usuario</h4>
                <button type="button" class="close" data-dismiss="modal">
                  &times;
                </button>
              </div>

              <div class="modal-body">{res.username}</div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-danger"
                  data-dismiss="modal"
                  onClick={() => {
                    getUsers()
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <div className="card card-body">
          <h3>Crea un nuevo usuario</h3>
          <form action="" onSubmit={onSubmit}>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-dark">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
      <div className="col-md-6">
        {" "}
        <ul className="list-group">
          {users.map((user) => (
            <li
              className="list-group-item list-group-item-action d-flex justify-content-between align-items-center "
              key={user._id}
            >
              {user.username}
              <i
                className="fas fa-trash btn btn-dark"
                data-toggle="tooltip"
                data-placement="left"
                title="Ésta acción eliminará el usuario"
                onClick={(e) => {
                  onClick(user._id, e);
                }}
              ></i>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Users;
