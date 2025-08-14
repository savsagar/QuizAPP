import { useState } from "react";
import "./normalUser2.css";

import logo from './images/normal.png';

function User() {
  const [studentData, setStudentData] = useState({
    name: "",
    fatherName: "",
    email: "",
    mobile: "",
    
  });

  // STEP 2: Function that runs when user types in any input
  const handleChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    console.log(`User typed "${fieldValue}" in ${fieldName} field`);

    setStudentData({
      ...studentData,
      [fieldName]: fieldValue,
    });
  };

  // STEP 3: Save function
  const handleSave = () => {
    console.log("Save button clicked!");
    console.log("All form data:", studentData);
    alert(`Saved! Name: ${studentData.name}, Email: ${studentData.email}`);
  };

  // STEP 4: Clear function
  const handleCancel = () => {
    console.log("Cancel button clicked - clearing all data");
    setStudentData({
      name: "",
      fatherName: "",
      email: "",
      mobile: "",
      
    });
  };

  return (
    <div className="nu-container">
      {/* Header Section */}
      <div className="nu-header">
        <h1 className="nu-title">Normal User</h1>
        <div className="nu-line"></div>
      </div>

      {/* Profile Picture - Shows ONLY on mobile at the TOP */}
      <div className="nu-mobile-profile-section">
        <div className="nu-profile-card">
          <div className="nu-profile-box">
            <img
              src={logo}
              alt="Student"
              className="nu-profile-image"
            />
          </div>
        </div>
      </div>

      {/* Desktop Layout - Personal Details + Profile Picture side by side */}
      <div className="nu-desktop-main-row">
        {/* Personal Details Card */}
        <div className="nu-card personal-card">
          <h2 className="nu-card-title">Personal Details</h2>

          <div className="nu-field">
            <label className="nu-label">Name :</label>
            <div className="nu-input-box">
              <input
                type="text"
                name="name"
                value={studentData.name}
                onChange={handleChange}
                className="nu-input"
                placeholder="Enter your name"
              />
              <span className="nu-edit-icon">✏️</span>
            </div>
          </div>

          <div className="nu-field">
            <label className="nu-label">Father's Name :</label>
            <div className="nu-input-box">
              <input
                type="text"
                name="fatherName"
                value={studentData.fatherName}
                onChange={handleChange}
                className="nu-input"
                placeholder="Enter father's name"
              />
              <span className="nu-edit-icon">✏️</span>
            </div>
          </div>

          <div className="nu-field">
            <label className="nu-label">E-mail :</label>
            <div className="nu-input-box">
              <input
                type="email"
                name="email"
                value={studentData.email}
                onChange={handleChange}
                className="nu-input"
                placeholder="Enter email address"
              />
              <span className="nu-edit-icon">✏️</span>
            </div>
          </div>

          <div className="nu-field">
            <label className="nu-label">Mobile :</label>
            <div className="nu-input-box">
              <input
                type="tel"
                name="mobile"
                value={studentData.mobile}
                onChange={handleChange}
                className="nu-input"
                placeholder="Enter mobile number"
              />
              <span className="nu-edit-icon">✏️</span>
            </div>
          </div>
        </div>

        {/* Desktop Profile Picture - Shows ONLY on desktop */}
        <div className="desktop-profile-card">
          <div className="nu-profile-box">
            <img
              src={logo}
              alt="Student"
              className="nu-profile-image"
            />
          </div>
        </div>
      </div>


      {/* Buttons */}
      <div className="nu-buttons">
        <button className="save-btn" onClick={handleSave}>
          Save
        </button>
        <button className="cancel-btn" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}


export default User;
