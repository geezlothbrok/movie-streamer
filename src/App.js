import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movies from "./pages/movies/Movies";

function App() {
  return (
    <BrowserRouter>
    <>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
      
    </>
    </BrowserRouter>
  );
}

export default App;
