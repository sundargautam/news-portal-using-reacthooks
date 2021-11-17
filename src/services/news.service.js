import axios from "axios";
import { API_KEY } from "../config/secret";

export const getBussinessNews = (country = "us", category = "business") => {
  return axios.get(
    `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`
  );
};

export const getPopularNews = (category = "popularity")=>{
  return axios.get(`https://newsapi.org/v2/everything?q=apple&from=2021-11-16&to=2021-11-16&sortBy=${category}&apiKey=${API_KEY}`);
}
