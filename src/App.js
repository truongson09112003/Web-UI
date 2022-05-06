import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navbar, Intro, Service, Video } from "./Components";

console.log(Video);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/services" element={<Service />} />
          <Route path="/experience" element={<Video />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
