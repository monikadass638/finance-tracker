import React from "react";

function Cardsummary() {
  return (
    <div className="text-center container mt-5 mb-5">
      <div className="d-flex flex-wrap gap-3">
        <div className="p-2 bg-light flex-fill rounded shadow-lg">
          <div>Total Balance</div>
          <div className="fw-bold fs-5 ">$4200</div>
        </div>
        <div className="p-2 bg-light flex-fill rounded shadow-lg">
          <div>Total Income</div>
          <div className="fw-bold fs-5">$2500</div>
        </div>
        <div className="p-2 bg-light flex-fill rounded shadow-lg">
          <div>Total Expense</div>
          <div className="fw-bold fs-5">$900</div>
        </div>
      </div>
    </div>
  );
}

export default Cardsummary;
