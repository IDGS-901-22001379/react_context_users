import React from "react";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";
// (Opcional) Estos no se renderizan como componentes, por eso no los importo.
// import UserContext from "./context/User/UserContext";
// import UserReducer from "./context/User/UserReducer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <UserState>
      <div className="container p-4">
        <header>
          <h1>React Context</h1>
        </header>

        <div className="row">
          <div className="col-12 col-md-7">
            <UserList />
          </div>

          <div className="col-12 col-md-5">
            <Profile />
          </div>
        </div>
      </div>
    </UserState>
  );
};

export default App;
