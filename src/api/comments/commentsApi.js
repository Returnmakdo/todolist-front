import axios from "axios";
const BASE_URL = process.env.REACT_APP_COMMENTS_URL;

export const getComments = async (id) => {
  const { data } = await axios.get(BASE_URL, { todoId: id });
  return data;
};

export const addComment = async (comment) => {
  const { data } = await axios.post(BASE_URL, comment);
  return data;
};

export const deleteComment = async (id) => {
  console.log(id);
  await axios.delete(`${BASE_URL}/${id}`);
};

export const editComment = async ({ id, update }) => {
  const { data } = await axios.patch(`${BASE_URL}/${id}`, update);
  return data;
};
