import axios from "axios";

const baseUrl = "http://localhost:3001/notes";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const createNote = (note) => {
  const req = axios.post(baseUrl, note);
  return req.then((res) => res.data);
};

const updateNote = (id, note) => {
  const req = axios.put(`${baseUrl}/${id}`, note);
  return req.then((res) => res.data);
};

export { getAll, createNote, updateNote };
