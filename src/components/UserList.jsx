import React, { useContext, useEffect } from "react";
import UserContext from "../context/User/UserContext";

const UserList = () => {
  // Accedemos al contexto compartido
  const { users, getProfile, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers?.();
  }, [getUsers]);

  if (!users || users.length === 0) {
    return <div className="list-group h-100 p-3">Cargando usuarios…</div>;
  }

  return (
    <div className="list-group h-100">
      {users.map((user) => (
        <button
          type="button"
          key={user.id}
          className="list-group-item list-group-item-action d-flex align-items-center gap-3"
          onClick={() => getProfile?.(user.id)}
        >
          <img
            src={user.avatar}
            alt={`${user.first_name} ${user.last_name}`}
            className="img-fluid rounded-circle"
            width={70}
            height={70}
          />
          <p className="m-0">{`${user.first_name} ${user.last_name}`}</p>
        </button>
      ))}
    </div>
  );
};

export default UserList;
