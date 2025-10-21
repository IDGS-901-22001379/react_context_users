import React, { useContext } from "react";
import UserContext from "../context/User/UserContext";

const Profile = () => {
  // Accedemos al contexto y desestructuramos el estado
  const { selectedUser } = useContext(UserContext);

  if (!selectedUser) {
    return <h2 className="text-muted">No user selected</h2>;
  }

  return (
    <>
      <div className="card card-body text-center">
        <img
          src={selectedUser.avatar}
          alt={`${selectedUser.first_name} ${selectedUser.last_name}`}
          className="card-img-top rounded-circle m-auto img-fluid"
          style={{ width: 180, height: 180, objectFit: "cover" }}
        />
        <h1 className="h4 mt-3">{`${selectedUser.first_name} ${selectedUser.last_name}`}</h1>
        <h3 className="h6 text-secondary mb-0">Email: {selectedUser.email}</h3>
      </div>
    </>
  );
};

export default Profile;
