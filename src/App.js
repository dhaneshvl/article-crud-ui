import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ArticleList from "./components/ArticleList";
import AddArticle from "./components/AddArticle";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ArticleList />} />
            <Route path="/home" element={<ArticleList />} />
            <Route path="/add-article" element={<AddArticle />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
