import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import AboutUs from "./components/AboutUs";
import Teams from "./components/Teams";

function App() {
  const subscriber = 1000;
  const blogTitle = "Best Games of 2023";
  const blogLikes = 100;
  const blogLink = "https://letsupgrade.in/programs";
  const blogLink2 = "https://letsupgrade.in/programs;";

  const author = { nameAuthor: "Sumit", age: 23, blogWritten: 20 };

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/allblogs" element={<AllBlogs />} />
          <Route exact path="/aboutus" element={<AboutUs />} />
          <Route exact path="/teams" element={<Teams />} />
        </Routes>

        <div className="content"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
