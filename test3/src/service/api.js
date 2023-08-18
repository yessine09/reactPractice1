import axios from "axios";

const url = "http://localhost:3030/products";
export const getAllProducts = async () => {
  return axios.get(url).then((response) => response.data);
};



export const getProductById = async (id) => {
  return axios.get(`${url}/${id}`).then((response) => response.data);
};

export const newProduct = async (product) => {
  return await axios.post(url, product);
};
export const editProduct = async (id, product) => {
  return await axios.put(`${url}/${id}`, product);
};
export const deleteProduct = async (id) => {
  return await axios.delete(`${url}/${id}`);
};
