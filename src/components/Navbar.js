import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mt-3">
      <ul className="d-flex justify-content-center list-unstyled gap-3 text-black-50">
        <li>
          <Link to="/" className="text-decoration-none text-black-50">
            Home
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link to="/budget" className="text-decoration-none text-black-50">
            Budget
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link
            to="/viewtransaction"
            className="text-decoration-none text-black-50"
          >
            Transactions
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
