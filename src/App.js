import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import Studentdata from "./pages/Studentdata";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applicationform from "./pages/Applicationform";
import Recruitmentform from "./pages/Recruitmentform";
import Post from "./pages/Post";
import Loginpage from "./pages/Loginpage";
import Singleblogpost from "./pages/Singleblogpost";

function App() {
  return (
    <div className="App">
      <h1>Hello pwc trainees</h1>

      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Counter /> */}
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/studentdata" element={<Studentdata />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/applicationform" element={<Applicationform />} />
          <Route path="/recruitmentform" element={<Recruitmentform />} />
          <Route path="/post" element={<Post />} />
          {/* <Route path="/Post" element={<Post />} /> */}
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/singleblogpost" element={<Singleblogpost />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
