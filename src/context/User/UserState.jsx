/**
 * Proveedor de estado (UserState)
 * Define el estado inicial y las acciones para consumir en la app.
 */
import React, { useReducer } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import UserReducer from "./UserReducer";
import UserContext from "./UserContext";

const UserState = ({ children }) => {
  // Estado inicial
  const initialState = {
    users: [],
    selectedUser: null,
  };

  // Hook useReducer con tu reducer
  const [state, dispatch] = useReducer(UserReducer, initialState);

  // Obtener todos los usuarios
  const getUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users", {
        headers: { "reqres-free-v1": "reqres-free-v1" },
      });
      // Enviamos los datos al reducer para que los guarde en el state
      dispatch({
        type: "SET_USERS",
        payload: res?.data?.data ?? [],
      });
    } catch (err) {
      console.error("Error al obtener usuarios:", err);
      // Si tu reducer soporta SET_ERROR, podrías despacharlo aquí.
      // dispatch({ type: 'SET_ERROR', payload: err });
    }
  };

  // Obtener perfil por id
  const getProfile = async (id) => {
    try {
      const res = await axios.get(`https://reqres.in/api/users/${id}`, {
        headers: { "reqres-free-v1": "reqres-free-v1" },
      });
      dispatch({
        type: "SET_SELECTED_USER",
        payload: res?.data?.data ?? null,
      });
    } catch (err) {
      console.error("Error al obtener perfil:", err);
      // dispatch({ type: 'SET_ERROR', payload: err });
    }
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserState.propTypes = {
  children: PropTypes.node.isRequired,
};

export default UserState;
