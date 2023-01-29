import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BlogPost from "./pages/BlogPost";
import NewBlog from "./pages/NewBlog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/new" element={<NewBlog />} />
        <Route exact path="/:id" element={<BlogPost />} />
      </Routes>
    </div>
  );
}

export default App;
