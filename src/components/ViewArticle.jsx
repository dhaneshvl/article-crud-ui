import React from "react";
import { Button, Modal, Spin } from "antd";
import ArticleService from "./ArticleService";

const ViewArticle = ({ articleId, isOpen, onClose }) => {
  const [article, setArticle] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (articleId && isOpen) {
      const fetchArticleDetails = async () => {
        try {
          setLoading(true);
          const response = await ArticleService.getArticle(articleId);
          if (response.status === 200) {
            setArticle(response.data);
          }
        } catch (error) {
          console.error("An error occurred while fetching the article details: " + error);
        } finally {
          setLoading(false);
        }
      };

      fetchArticleDetails();
    }
  }, [articleId, isOpen]);

  return (
    <Modal
      title="Article Details"
      visible={isOpen}
      onCancel={onClose}
      footer={null}
    >
      {loading ? (
        <Spin />
      ) : article ? (
        <>
          <p><strong>User ID:</strong> {article.userId}</p>
          <p><strong>Title:</strong> {article.title}</p>
          <p><strong>Content:</strong> {article.content}</p>
          <p><strong>Posted Date:</strong> {article.postedDate}</p>
        </>
      ) : (
        <p>No details available.</p>
      )}
    </Modal>
  );
};

export default ViewArticle;
