import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArticleService from "./ArticleService";
import { Button } from "antd";

const AddArticle = () => {
  const [article, setArticle] = useState({
    userId: 1,
    title: "",
    content: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setArticle((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await ArticleService.addArticle(article);
      if (response.status === 201) {
        navigate("/");
      }
    } catch (error) {
      console.error("An error occurred while adding the article: " + error);
    }
  };

  return (
    <>
      <h1>Add New Article Page</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <label>
            Title
            <input
              type="text"
              value={article.title}
              onChange={handleInputChange}
              style={{ padding: 5, width: 250, resize: "auto" }}
              name="title"
              required
            />
          </label>

          <label>
            Content
            <textarea
              name="content"
              value={article.content}
              onChange={handleInputChange}
              style={{ padding: 10, width: 400, resize: "auto" }}
              required
            />
          </label>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </div>
      </form>
    </>
  );
};

export default AddArticle;
