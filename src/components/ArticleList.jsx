import React, { useEffect, useState } from "react";
import ArticleService from "./ArticleService";
import Article from "./Article";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ArticleService.getArticles();
        setArticles(response.data);
      } catch (error) {
        console.error(
          "An error occurred while fetching the articles: " + error
        );
      }
    };

    fetchData();
  }, []);

  const handleRouteToAddArticlePage = () => {
    navigate("/add-article");
  };

  const handleDeleteArticle = async (articleId) => {
    try {
      const response = await ArticleService.deleteArticle(articleId);
      if (response.status === 200) {
        // Filter out the deleted article from the articles list
        setArticles(articles.filter(article => article.id !== articleId));
      }
    } catch (error) {
      console.error("An error occurred while deleting an article: " + error);
    }
  };

  return (
    <>
      <h1 style={{ color: "#061178" }}> Articles World </h1>

      <Button
        type="primary"
        style={{
          marginBottom: 25,
          display: "block",
          marginLeft: "auto",
          marginRight: 100,
        }}
        onClick={handleRouteToAddArticlePage}
      >
        Add New Article
      </Button>

      <Article handleDeleteArticle={handleDeleteArticle} articles={articles} />
    </>
  );
};

export default ArticleList;
