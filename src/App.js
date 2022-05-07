import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navbar,
  Intro,
  Service,
  Video,
  Work,
  Portfolio,
  Contact,
} from "./Components";
import { themContext } from "./Context";

function App() {
  const Theme = useContext(themContext);
  const darkMode = Theme.state.darkMode;

  return (
    <Router>
      <div
        className="App"
        style={{
          background: darkMode ? "black" : "",
          color: darkMode ? "#fff" : "",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/services" element={<Service />} />
          <Route path="/experience" element={<Video />} />
          <Route path="/works" element={<Work />} />
          <Route path="/checkout" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
