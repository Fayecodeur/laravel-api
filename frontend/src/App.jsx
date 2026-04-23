import { Routes, Route } from "react-router-dom";

import "./App.css";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section>
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </section>
  );
}

export default App;
