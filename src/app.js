import axios from "axios";

const api = axios.create({
  baseURL: "https://ruby-edwards-northcoders-news.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

const getArticle = (article_id) => {
  return api.get(`/articles/${article_id}`).then(({ data: { article } }) => {
    return article;
  });
};

export { getArticles, getArticle };
