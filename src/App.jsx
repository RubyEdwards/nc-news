import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllArticlesView from "./components/AllArticlesView";
import SingleArticleView from "./components/SingleArticleView";
import Error from "./components/Error";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticlesView />} />
        <Route path="/articles" element={<AllArticlesView />} />
        <Route path="/articles/:article_id" element={<SingleArticleView />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
