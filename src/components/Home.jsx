import React from "react";
import FeesContainer from "./FeesContainer";
import normalCap from "../assets/cap-normal.png";
import selectedCap from "../assets/cap-selected.png";

function Home() {
  return (
    <div className="home">
      <div className="form-container">
        <form className="semester-form">
          <div>
            <label htmlFor="fees">Name a Fees Creation</label>
            <input type="text" name="fees" placeholder="Type Something..." />
          </div>
          <div>
            <label htmlFor="program-level">Program Level</label>
            <select name="program-level" id="program-level">
              <option value="value1">Select</option>
              <option value="value2">Level1</option>
              <option value="value3">Level2</option>
              <option value="value4">Level3</option>
            </select>
          </div>
          <div>
            <label htmlFor="fees">Program Type</label>
            <select name="program-type" id="program-type">
              <option value="value1">Select</option>
              <option value="value2">Level1</option>
              <option value="value3">Level2</option>
              <option value="value4">Level3</option>
            </select>
          </div>
          <div>
            <label htmlFor="fees">Program Name</label>
            <select name="program-name" id="program-name">
              <option value="value1">Select</option>
              <option value="value2">Level1</option>
              <option value="value3">Level2</option>
              <option value="value4">Level3</option>
            </select>
          </div>
        </form>
      </div>

      <div className="program-container">
        <div className="program-card">
          <img src={normalCap} />
          <h4>College Name</h4>
        </div>
        <div className="program-card-selected">
          <img src={selectedCap} />
          <h4>College Name</h4>
        </div>
        <div className="program-card">
          <img src={normalCap} />
          <h4>College Name</h4>
        </div>
      </div>

      <FeesContainer />
    </div>
  );
}

export default Home;
