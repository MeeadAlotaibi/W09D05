const initState = {
  role: "",
  token: "",
  id: "",
};

/////////////////////////////////////////////////////////

const sign = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { role, token, id } = payload;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("id", id);

      return { role, token };

    case "LOGOUT":
      localStorage.clear();
      return payload;

    default:
      let tokenStorage = localStorage.getItem("token");
      let roleStorage = localStorage.getItem("role");
      let idStorage = localStorage.getItem("id");

      if (tokenStorage && roleStorage)
        return { role: roleStorage, token: tokenStorage, id: idStorage };
      else return state;
  }
};
export default sign;

/////////////////////////////////////////////////////////

export const login = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

/////////////////////////////////////////////////////////

export const logout = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
