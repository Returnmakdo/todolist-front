import axios from "axios";
const BASE_URL = process.env.REACT_APP_TODOS_URL;

export const getTodos = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const getTodo = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};

export const addTodos = async (todo) => {
  const { data } = await axios.post(BASE_URL, todo);
  return data;
};

export const toggleTodos = async ({ id, update }) => {
  const { data } = await axios.patch(`${BASE_URL}/${id}`, update);
  return data;
};

export const deleteTodos = async (id) => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const editTodos = async ({ id, update }) => {
  await axios.patch(`${BASE_URL}/${id}`, update);
};
