import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaTrash, FaEdit } from "react-icons/fa";

function Budget() {
  return (
    // Use a flex column to stack header, nav, and content
    <div className="d-flex flex-column h-100">
      <Header />
      <Navbar />
      {/* This container will grow to fill remaining space and center its content */}
      <div className="container mt-5 p-4 bg-white shadow-lg rounded">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2 className="fs-4 mb-0">Recent Transactions</h2>
          <div
            className="d-flex align-items-center gap-2"
            style={{ width: "250px" }}
          >
            <label htmlFor="transaction-filter" className="form-label mb-0">
              Filter
            </label>
            <select
              id="transaction-filter"
              className="form-select form-select-sm"
            >
              <option>All</option>
              <option>Month</option>
              <option>Category</option>
              <option>Type</option>
            </select>
          </div>
        </div>
        <div className="table-responsive">
          <table className="table table-striped table-hover table-bordered align-middle text-center">
            <thead>
              <tr className="table-secondary">
                <th>Date</th>
                <th>Category</th>
                <th>Note</th>
                <th>Amount</th>
                <th>Edit/Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12 nov 2025</td>
                <td>Grocieries</td>
                <td>weekely Grocery Shopping</td>
                <td>-$45</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-secondary">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>12 nov 2025</td>
                <td>Grocieries</td>
                <td>weekely Grocery Shopping</td>
                <td>-$45</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-secondary">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>12 nov 2025</td>
                <td>Grocieries</td>
                <td>weekely Grocery Shopping</td>
                <td>-$45</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-secondary">
                    <FaTrash />
                  </button>
                </td>
              </tr>
              <tr>
                <td>12 nov 2025</td>
                <td>Grocieries</td>
                <td>weekely Grocery Shopping</td>
                <td>-$45</td>
                <td>
                  <button className="btn btn-sm btn-secondary me-2">
                    <FaEdit />
                  </button>
                  <button className="btn btn-sm btn-secondary">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Budget;
