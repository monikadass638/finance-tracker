import React from "react";

function AddTransactions() {
  return (
    <div className="modal fade" id="addTransactionModal" tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Transaction</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="transactionTitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="transactionTitle"
                  placeholder="Enter title"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="transactionAmount" className="form-label">
                  Amount
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="transactionAmount"
                  placeholder="Enter amount"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="transactionType" className="form-label">
                  Type
                </label>
                <select id="transactionType" className="form-select">
                  <option value="income">Food</option>
                  <option value="expense">Travel</option>
                  <option value="income">Groceries</option>
                  <option value="expense">Rent</option>
                </select>
              </div>
            </form>
          </div>

          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTransactions;
