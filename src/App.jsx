import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";
import About from "./Pages/Hub/About/About";
import Vision from "./Pages/Hub/Vision/Vision";
import Founder from "./Pages/Hub/Founder/Founder";
import Financial from "./Pages/Hub/Financial/Financial";
import Collabration from "./Pages/Hub/Collabration/Collabration";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="vision" element={<Vision />} />
          <Route path="founders" element={<Founder />} />
          <Route path="financial-reports" element={<Financial />} />
          <Route path="collabrations" element={<Collabration />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
