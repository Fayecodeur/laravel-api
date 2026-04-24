import { Routes, Route } from "react-router-dom";

import "./App.css";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";
import ShowPost from "./pages/ShowPost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:id" element={<ShowPost />} />
        <Route path="/posts/edit/:id" element={<EditPost />} />
      </Routes>
    </section>
  );
}

export default App;
