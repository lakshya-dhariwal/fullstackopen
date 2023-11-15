import axios from "axios";
export const URL = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(URL);
  return request.then((response) => response.data);
};

const create = (obj) => {
  const request = axios.post(URL, obj);
  return request.then((response) => response.data);
};

const query = (name) => {
  const request = axios.get(`${URL}/query/${name}`);
  return request.then((response) => response.data);
};

const update = (id, phone) => {
  const request = axios.put(`${URL}/${id}`, phone);
  return request.then((response) => response.data);
};

const clear = (id) => {
  const request = axios.delete(`${URL}/${id}`);
  return request.then((response) => response.data);
};

export default {
  getAll,
  create,
  update,
  query,
  delete: clear,
};
