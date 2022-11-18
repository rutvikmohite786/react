import axios from "axios";

const API_URL = "http://192.168.1.79:3000/v1/auth/";

const register = (name, email, password) => {
  return axios.post(API_URL + "register", {
    name,
    email,
    password,
  }).then((response) => {
    console.log(response);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
      console.log('enter');
    }
    return response.data;
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      console.log(response);
      if (response.data) {

        localStorage.setItem("user", JSON.stringify(response.data));
        console.log('enter');
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};