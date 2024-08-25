import React, { useState } from "react";
import { Card, Col, Row, Tag, Button } from "antd";
import ViewArticle from "./ViewArticle";

const Article = ({ handleDeleteArticle, articles }) => {
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewArticle = (articleId) => {
    setSelectedArticleId(articleId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticleId(null);
  };

  return (
    <>
      {articles.length > 0 ? (
        <Row gutter={16}>
          {articles.map((article) => (
            <Col span={8} key={article.id}>
              <Card
                title={<Tag color="#eb2f96">{article.title}</Tag>}
                bordered={true}
              >
                <div style={{ color: "#061178" }}>{article.content}</div>
              </Card>
              <Button
                type="primary"
                style={{ marginTop: 10 }}
                onClick={() => handleViewArticle(article.id)}
              >
                View
              </Button>
              <Button
                type="primary"
                danger
                onClick={() => handleDeleteArticle(article.id)}
                style={{ marginTop: 10, marginLeft: 10 }}
              >
                Delete
              </Button>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No articles available.</p>
      )}

      <ViewArticle
        articleId={selectedArticleId}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Article;
