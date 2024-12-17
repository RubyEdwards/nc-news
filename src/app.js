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

const getComments = (article_id) => {
  return api
    .get(`/articles/${article_id}/comments`)
    .then(({ data: { comments } }) => {
      return comments;
    });
};

const upvoteArticle = (article_id) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: 1 });
};

const downvoteArticle = (article_id) => {
  return api.patch(`/articles/${article_id}`, { inc_votes: -1 });
};

export { getArticles, getArticle, getComments, upvoteArticle, downvoteArticle };
