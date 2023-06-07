import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Video from "./Pages/Video/Video";
import Nav from "./Components/Nav/Nav";

function App() {
  return <div className="App">
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/video/:id" element={<Video/>}></Route>
   </Routes>
   </BrowserRouter>
  </div>;
}

export default App;
