import { Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import AllArticlesView from "./components/AllArticlesView";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<AllArticlesView />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
