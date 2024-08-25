import axios from "axios";

const BASE_URL = "http://localhost:8080/api/articles";

class ArticleService {
  addArticle(article) {
    return axios.post(`${BASE_URL}`, article);
  }

  updateArticle(article, articleId) {
    return axios.put(`${BASE_URL}/${articleId} `,article);
  }

  getArticle(articleId) {
    return axios.get(`${BASE_URL}/${ articleId }`);
  }

  getArticles() {
    return axios.get(`${BASE_URL}`);
  }

  deleteArticle(articleId){
    return axios.delete(`${BASE_URL}/${articleId}`)
  }
}

export default new ArticleService();
