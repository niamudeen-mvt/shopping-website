import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products"


export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  // headers: { 'X-Custom-Header': 'foobar' }
});