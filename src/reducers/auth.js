const initState = {
  token: "",
};
/////////////////////////////////////////////////////////

const auth = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "RESET":
      localStorage.setItem("resetToken", payload);
      return { token: payload };

    case "ACTIVE":
      localStorage.setItem("activeToken", payload);
      return { token: payload };

    default:
      let resetTokenStorage = localStorage.getItem("resetToken");
      let activeTokenStorage = localStorage.getItem("activeToken");
      if (resetTokenStorage) return { token: resetTokenStorage };
      if (activeTokenStorage) return { token: activeTokenStorage };
      else return state;
  }
};

export default auth;

/////////////////////////////////////////////////////////

export const reset = (data) => {
  return {
    type: "RESET",
    payload: data,
  };
};

/////////////////////////////////////////////////////////

export const active = (data) => {
  return {
    type: "ACTIVE",
    payload: data,
  };
};

/////////////////////////////////////////////////////////

// const initState = {
//   posts: [],
// };

// const admin = (state = initState, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case "GET_TASKS":
//       return payload;

//     case "DELETE_TASKS":
//       return { posts: state.tasks.filter((item) => item._id !== payload) };

//     default:
//       return state;
//   }
// };

// export default admin;

// export const getAllTasks = (data) => {
//   return {
//     type: "GET_TASKS",
//     payload: { posts: data },
//   };
// };

// export const deleteAnyTasks = (data) => {
//   return {
//     type: "DELETE_TASKS",
//     payload: data,
//   };
// };
