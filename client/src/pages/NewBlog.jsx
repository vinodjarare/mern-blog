import { Link, useNavigate } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { BsFileCheck } from "react-icons/bs";
import Editor from "../components/Editor";
import { useState } from "react";
import axios from "axios";
const NewBlog = () => {
  const navigate = useNavigate();
  const [editorHtml, setEditorHtml] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const handleSubmit = async () => {
    if (!title || !editorHtml || !summary) {
      return alert("all fields are required.");
    }

    const blog = editorHtml;
    const res = await axios.post("http://localhost:5000/api/blogs", {
      blog,
      title,
      summary,
    });
    if (res.status === 201) {
      navigate("/");
    } else {
      alert("something went wrong.Try again!");
    }
  };

  return (
    <div className="newBlog">
      <div className="newLinks">
        <Link to="/">
          <SlHome />
        </Link>
        <button className="btn" onClick={handleSubmit}>
          <BsFileCheck />
        </button>
      </div>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <label htmlFor="body">Body</label>
        <Editor editorHtml={editorHtml} setEditorHtml={setEditorHtml} />
        <label htmlFor="summary">Summary</label>
        <input
          type="text"
          name="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          required
        />
      </form>
    </div>
  );
};

export default NewBlog;
