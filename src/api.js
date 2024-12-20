import axios from "axios";

const api = axios.create({
  baseURL: "https://ruby-edwards-northcoders-news.onrender.com/api",
});

const getArticles = (topic, sortBy, order) => {
  let url = `/articles`;
  if (topic) {
    url += `?topic=${topic}`;
  } else {
    url += `?sort_by=${sortBy}&order=${order}`;
  }
  return api.get(url).then(({ data: { articles } }) => {
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

const voteOnArticle = (name, article_id) => {
  let vote = 1;
  if (name === "downvote") vote = -1;
  return api.patch(`/articles/${article_id}`, { inc_votes: vote });
};

const postComment = (article_id, newComment) => {
  return api
    .post(`/articles/${article_id}/comments`, newComment)
    .then(({ data: { comment } }) => {
      return comment;
    });
};

const deleteComment = (comment_id) => {
  return api.delete(`/comments/${comment_id}`);
};

const getTopics = () => {
  return api.get("/topics").then(({ data: { topics } }) => {
    return topics;
  });
};

export {
  getArticles,
  getArticle,
  getComments,
  postComment,
  voteOnArticle,
  deleteComment,
  getTopics,
};
