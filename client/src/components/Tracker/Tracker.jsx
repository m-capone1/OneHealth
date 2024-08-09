import { useState } from "react";
import React from "react";
import "./Tracker.scss";

function Tracker() {
  const [symptoms, setSymptoms] = useState([]);
  const [condition, setCondition] = useState("");
  const [notes, setNotes] = useState("");

  const handleConditionChange = (e) => {
    setCondition(e.target.value);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };

  const handleAddSymptom = () => {
    if (condition && notes) {
      const newSymptom = {
        condition,
        notes,
        timestamp: new Date().toLocaleString(),
      };
      setSymptoms([...symptoms, newSymptom]);
      setCondition("");
      setNotes("");
    } else {
      alert("Please select your condition and input some notes.");
    }
  };

  const handleDeleteSymptom = (index) => {
    const updatedSymptoms = symptoms.filter((_, i) => i !== index);
    setSymptoms(updatedSymptoms);
  };

  return (
    <>
      <div className="tracker">
        <div className="tracker__form">
          <div className="tracker__form--titles">
            <h2 className="tracker__symptom">Symptom</h2>
            <div className="tracker__green">
              <input
                type="radio"
                value="✅"
                name="condition"
                checked={condition === "✅"}
                onChange={handleConditionChange}
              />
            </div>
            <div className="tracker__yellow">
              <input
                type="radio"
                value="👌"
                name="condition"
                checked={condition === "👌"}
                onChange={handleConditionChange}
              />{" "}
            </div>
            <div className="tracker__red">
              <input
                type="radio"
                value="❌"
                name="condition"
                checked={condition === "❌"}
                onChange={handleConditionChange}
              />{" "}
            </div>
          </div>
          <div className="tracker__input--container">
            <input
              className="tracker__input"
              type="text"
              placeholder="Enter your symptoms"
              value={notes}
              onChange={handleNotesChange}
            />
          </div>
          <div className="tracker__button">
            <button className="button" onClick={handleAddSymptom}>
              Add
            </button>
          </div>
        </div>

        <div className="tracker__record">
          <h2 className="tracker__record--title">Records</h2>
          <div className="tracker__record--container">
            <div className="tracker__record--titles">
              <h3 className="tracker__record--condition">Condition</h3>
              <h3 className="tracker__record--notes">Notes</h3>
              <h3 className="tracker__record--time">Time</h3>
            </div>
            <div>
              <ul>
                {symptoms.map((symptom, index) => (
                  <div className="record__titles" key={index}>
                    <div className="record__condition">{symptom.condition}</div>
                    <div className="record__notes">{symptom.notes}</div>
                    <div className="record__time">{symptom.timestamp}</div>
                    <button
                      className="record__buttons"
                      onClick={() => handleDeleteSymptom(index)}
                    >
                      ✏️
                    </button>
                    <button
                      className="record__buttons"
                      onClick={() => handleDeleteSymptom(index)}
                    >
                      🗑️
                    </button>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tracker;
