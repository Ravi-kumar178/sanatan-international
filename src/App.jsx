import "./App.css";
import AppRoutes from "./AppRoutes/AppRoutes";
import ScrollToTop from "./Utils/ScrollToTop";

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <ScrollToTop/>
      <AppRoutes />
    </div>
  );
}

export default App;
