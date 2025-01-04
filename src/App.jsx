import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import AllArticlesView from "./components/AllArticlesView";
import SingleArticleView from "./components/SingleArticleView";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AllArticlesView />} />
        <Route path="/articles" element={<AllArticlesView />} />
        <Route path="/articles/:article_id" element={<SingleArticleView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
