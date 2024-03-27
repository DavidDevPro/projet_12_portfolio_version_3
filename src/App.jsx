import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Router>
        {/* Header Navigation*/}
        <Header />
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
