import "./Home.css";
import React, { useEffect, useState } from "react";
import {
  getBussinessNews,
  getPopularNews,
} from "./../../services/news.service";
import Postcard from "../../components/PostCard/PostCard";
import Loader from "../../components/Loader/Loader";

const Home = ({ pageTitle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getPopularNews()
      .then(({ data }) => {
        setArticles(data.articles);
        setError(false);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        setLoading(false);
      });
  }, []);
  return (
    <div className="homepage l-common">
     {loading && <Loader/>}
      {error ? (
        <h2>Something went wrong</h2>
      ) : (
        <>
          {articles.map((article, index) => (
            <Postcard
              key={index}
              author={article.author}
              title={article.title}
              url={article.url}
              urlToImage={article.urlToImage}
              description={article.description}
              content={article.content}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Home;
