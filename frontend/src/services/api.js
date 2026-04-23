import axios from "axios";

const URL = "http://127.0.0.1:8000/api/posts";

export const getPosts = async () => {
  const response = await axios.get(URL);
  return response.data.data;
};

export const createPost = async (data) => {
  const response = await axios.post(URL, data);
  return response.data;
};
