import React from "react";
import DateRangeSelector from "../reusableComponents/DateRangeSelector";
import credHiveMap from "../images/credHiveMap.png";
import "./routes.css";

const ContactUs = () => {
  return (
    <div className="contactUsContainer">
      <div className="flex-column">
        <span className="large-text" style={{ marginLeft: "32px" }}>
          PS Finsec Private Limited
        </span>
        <span className="contactSubHeading">www.psfinsec.com</span>

        <hr style={{ marginTop: "10px" }} />

        <span>
          <span className="customBoldTextLeft">CIN:</span>
          <span className="customBoldText">U59348483DL54334PTC4324326</span>
        </span>

        <span style={{ marginTop: "10px" }}>
          <span className="customBoldTextLeft">PAN:</span>
          <span className="customBoldText">PTRTR3428C</span>
        </span>

        <span style={{ marginTop: "10px" }}>
          <span className="customBoldTextLeft">Date of Incorporation:</span>
          <span className="customBoldText">13 February, 2018</span>
        </span>

        <span className="addText">Add:</span>

        <span className="addTextData">
          67, Netaji Subash Place <br />
          New delhi - 110083
        </span>
        <span className="addTextData" style={{ marginTop: "16px" }}>
          finance@psfinsec.com <br />
          +91 011 2738282-88
        </span>
      </div>

      <div>
        <img className="mapStyle" src={credHiveMap} alt="credHiveMap" />
      </div>
    </div>
  );
};

export default ContactUs;
