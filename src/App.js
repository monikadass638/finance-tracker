import Budget from "./Pages/Budget";
import Dashboard from "./Pages/Dashboard";
import { Routes, Route } from "react-router-dom";
import ViewTransactions from "./Pages/ViewTransactions";

function App() {
  return (
    <div className="container-fluid bg-body-secondary min-vh-100">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/viewtransaction" element={<ViewTransactions />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>
    </div>
  );
}

export default App;
