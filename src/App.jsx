import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route index path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
