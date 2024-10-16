import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Auth } from "./pages/auth/index";
import { Expensetracker } from "./pages/expense-tracker/index";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Auth />} />

          <Route path="/expense-tracker" element={<Expensetracker />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
