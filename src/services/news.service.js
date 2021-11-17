import axios from "axios";
import { API_KEY } from "../config/secret";

export const getBussinessNews = (country = "us", category = "business") => {
  return axios.get(
    `https://saurav.tech/NewsAPI/top-headlines/category/health/in.json`
  );
};

export const getPopularNews = (category = "popularity")=>{
  return axios.get(`https://saurav.tech/NewsAPI/everything/cnn.json`);
}
