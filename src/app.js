import axios from "axios";

const api = axios.create({
  baseURL: "https://ruby-edwards-northcoders-news.onrender.com/api",
});

const getArticles = () => {
  return api.get("/articles").then(({ data: { articles } }) => {
    return articles;
  });
};

export { getArticles };
