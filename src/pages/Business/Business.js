import "./Business.css";
import React, { useEffect, useState } from "react";
import { getBussinessNews } from "./../../services/news.service";
import Postcard from "../../components/PostCard/PostCard";
import Loader from "../../components/Loader/Loader";

const Business = ({ pageTitle }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getBussinessNews()
      .then(({ data }) => {
        setArticles(data.articles);
        setError(false);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);

        setError(true);
      });
  }, []);
  return (
    <div className="business l-common">
      {loading && <Loader />}
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

export default Business;
