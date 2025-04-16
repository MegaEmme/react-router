import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
