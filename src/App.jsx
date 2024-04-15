import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProjectPage from "./pages/ProjectPage";
import OneProjectPage from "./pages/OneProjectPage";
import ContactPage from "./pages/ContactPage";

const App = () => {

  const basename = import.meta.env.MODE === "production" ? "/projet_12_portfolio_version_3/" : "";
  return (
    <>
      <Router basename={basename}>
        {/* Header Navigation*/}
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/project/:id" element={<OneProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* Footer*/}
        <Footer />
      </Router>
    </>
  );
};

export default App;
