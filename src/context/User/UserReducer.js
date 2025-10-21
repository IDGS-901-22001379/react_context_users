// src/context/User/UserReducer.js
import { GET_PROFILE, GET_USERS } from "../types";

/**
 * Reducer para manejar el estado de usuarios.
 * state esperado: { users: [], selectedUser: null }
 */
export default function UserReducer(state, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return { ...state, users: payload };

    case GET_PROFILE:
      return { ...state, selectedUser: payload };

    default:
      return state;
  }
}
