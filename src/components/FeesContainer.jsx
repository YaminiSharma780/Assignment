import { useState } from "react";
import FeesTable from "./FeesTable";

const semesterLabels = [
  "Semester 1",
  "Semester 2",
  "Semester 3",
  "Semester 4",
  "Semester 5",
  "Semester 6",
  "Semester 7",
  "Semester 8",
];

export default function FeesContainer() {
  const [activeSemester, setActiveSemester] = useState(0);

  const renderForm = () => (
    <form className="semester-form">
      <div>
        <label htmlFor="fee-payment-template">
          Select Fees Payment Templates
        </label>
        <select
          className="long-input"
          name="fee-payment-template"
          id="fee-payment-template"
        >
          <option value="value1">Select</option>
          <option value="value2">Level1</option>
          <option value="value3">Level2</option>
          <option value="value4">Level3</option>
        </select>
      </div>
      <div className="fee-creation-amount">
        <div className="fee-creation-div">
          <div>
            <label htmlFor="fees">Fees Name</label>
            <input type="text" name="fees" placeholder="Default" />
          </div>
          <div>
            <label htmlFor="fees">Fees Name</label>
            <input type="text" name="fees" placeholder="Default" />
          </div>
          <div>
            <label htmlFor="fees">Fees Name</label>
            <input type="text" name="fees" placeholder="Default" />
          </div>
        </div>
        <div className="fee-creation-div">
          <div>
            <label htmlFor="fees">Fees Amount</label>
            <input type="text" name="fees" placeholder="NUM" />
          </div>
          <div>
            <label htmlFor="fees">Fees Amount</label>
            <input type="text" name="fees" placeholder="NUM" />
          </div>
          <div>
            <label htmlFor="fees">Fees Amount</label>
            <input type="text" name="fees" placeholder="NUM" />
          </div>
        </div>
        <FeesTable />
      </div>
      <div className="next-cancel-btns">
        <button type="submit">Next</button>
        <button type="reset">Cancel</button>
      </div>
    </form>
  );

  return (
    <div className="home">
      <h3>Fee Details</h3>

      <div className="tabs-grid">
        {semesterLabels.map((label, idx) => (
          <button
            key={idx}
            className={`tab-btn ${activeSemester === idx ? "active" : ""}`}
            onClick={() => setActiveSemester(idx)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="form-container">
        <h3>{semesterLabels[activeSemester]}</h3>
        {renderForm()}
      </div>
    </div>
  );
}
