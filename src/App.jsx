import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import "tailwindcss/tailwind.css";

import Homepage from '../src/pages/Homepage.jsx';
import About from '../src/pages/About.jsx';
import Publications from '../src/pages/Publications.jsx';
import Research from '../src/pages/Research.jsx';
import Contact from '../src/pages/Contact.jsx';
import WorkExperience from "./pages/WorkExperience.jsx";




function App() {
  return (
    <>
      {
        <Router>
          <Routes>
            <Route exact="true" path="/" element={<Homepage />}></Route>
            <Route  path="/about" element={<About />}></Route>
            <Route  path="/publications" element={<Publications />}></Route>
            <Route  path="/research" element={<Research />}></Route>
            <Route  path="/contact" element={<Contact />}></Route>
            <Route  path="/workExperience" element={<WorkExperience />}></Route>
          </Routes>
        </Router>
      }
    </>
  );
}

export default App;
