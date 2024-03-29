import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";

const App = () => {
  return (
    <>
      <Router>
        {/* Header Navigation*/}
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
        {/* Footer*/}
        <Footer />
      </Router>
    </>
  );
};

export default App;
