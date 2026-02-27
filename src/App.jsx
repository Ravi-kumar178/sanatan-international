import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
