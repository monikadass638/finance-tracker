import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Budget() {
  return (
    // Use a flex column to stack header, nav, and content
    <div className="d-flex flex-column h-100">
      <Header />
      <Navbar />
      {/* This container will grow to fill remaining space and center its content */}
      <div className="container gap-3 mt-5 mb-5 flex-grow-1 d-flex justify-content-center align-items-strech">
        <div className="p-5 bg-white shadow-lg rounded">
          <h2> Total Budget</h2>
          <div className="mt-5">
            <label
              htmlFor="transactionType"
              className="form-label mb-3 text-black-50"
            >
              Enter your Monthly Budget
            </label>
            <input
              type="number"
              className="form-control"
              id="transactionAmount"
              placeholder="Enter amount"
            />
          </div>
          <button type="button" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
        <div className="p-5 bg-white shadow-lg rounded">
          <h2>Monthly Budget</h2>
          <div>
            <h6 className="text-black-50 mt-5">Total Budget:</h6>
            $2000
          </div>
          <div>
            <h6 className="text-black-50 mt-2">Spent:</h6>
            $900
          </div>
          <div>
            <h6 className="text-black-50 mt-2">Remaining:</h6>
            $1100
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Budget;
