import "./App.css";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Contactus from "./pages/Contactus";
import StudentsData from "./pages/StudentsData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applicationform from "./pages/Applicationform";
import Recruitmentform from "./pages/Recruitmentform";
import Posts from "./pages/Posts";
import ToDos from "./pages/Todos";
import Loginpage from "./pages/Loginpage";
import Conditional from "./pages/Conditional";
import Myprofile from "./pages/Myprofile";
import Users from "./pages/Users";

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
          <Route path="/studentsdata" element={<StudentsData />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/applicationform" element={<Applicationform />} />
          <Route path="/recruitmentform" element={<Recruitmentform />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<ToDos />} />
          <Route path="/users" element={<Users />} />
          <Route path="/loginpage" element={<Loginpage />} />
          <Route path="/conditional" element={<Conditional />} />
          <Route path="/myprofile" element={<Myprofile />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
