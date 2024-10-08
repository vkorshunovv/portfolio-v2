import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProjectOverview from "./pages/ProjectOverview";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectOverview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
