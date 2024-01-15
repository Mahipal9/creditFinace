import React from "react";
import "./components.css";
const CompanyDetails: React.FC = () => {
  return (
    <div className="companyDetails">
      <div className="avatarText">PS</div>
      <div className="textAlignment">
        <span className="companyHeading">PS Finsec Private Limited</span>
        <span className="cinColor">CIN: U59348483DL54334PTC4324326</span>
        <a className="siteColor" href="http://credhive.in/">
          www.psfinsec.com
        </a>
      </div>
    </div>
  );
};

export default CompanyDetails;
