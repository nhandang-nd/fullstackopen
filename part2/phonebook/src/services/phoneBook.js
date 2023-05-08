import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((res) => res.data);
};

const addPerson = (person) => {
  const req = axios.post(baseUrl, person);
  return req.then((res) => res.data);
};

const deletePerson = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((res) => res.data);

const updateNumber = (id, person) =>
  axios.put(`${baseUrl}/${id}`, person).then((res) => res.data);

export { getAll, addPerson, deletePerson, updateNumber };
