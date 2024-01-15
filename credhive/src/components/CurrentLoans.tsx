import React, { FC } from "react";
import { LoanData, currentLoans } from "../helpers/interface";

const CurrentLoans: FC<currentLoans> = ({ currentYear }) => {
  let currentLoanData: LoanData[] = [
    {
      avatarName:
        "https://play-lh.googleusercontent.com/CXix7vKeM8v-Z185gWziFxJ31nxn-VbI8ZhwOZvgTVpQNdOHznPof6h5wpXmMIA4Hw4u",
      bankName: "Kotak Mahindra Bank",
      interestRate: "8.6%",
      profit: currentYear === "Current Year" ? "18.4 cr" : "15.3 cr",
      sinceDate: "Since January, 2020",
      type: "image",
    },
    {
      avatarName:
        "https://mir-s3-cdn-cf.behance.net/projects/404/5deea860685505.Y3JvcCw5NTQsNzQ3LDIzNSww.jpg",
      bankName: "Bajaj Finance Bank",
      interestRate: "12.3%",
      profit: currentYear === "Current Year" ? "2.3 cr" : "1.2 cr",
      sinceDate: "Since January, 2020",
      type: "image",
    },
    {
      avatarName: "NB",
      bankName: "NBFC Private Limited",
      interestRate: "11.2%",
      profit: currentYear === "Current Year" ? "3.8 cr" : "2.5cr",
      sinceDate: "Since January, 2020",
      type: "text",
    },
  ];

  return (
    <>
      {currentLoanData?.map((item: LoanData) => (
        <div
          style={{ display: "flex", columnGap: "16px", marginTop: "20px" }}
          key={item.avatarName}
        >
          {item?.type === "image" ? (
            <div
              style={{
                height: "40px",
                width: "40px",
              }}
            >
              <img
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                src={item?.avatarName}
                alt="bankImage"
              />
            </div>
          ) : (
            <div style={{ background: "#E8E8E8", padding: "15px" }}>
              {item?.avatarName}
            </div>
          )}
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                columnGap: `${
                  item?.bankName === "Bajaj Finance Bank" ? "140px" : "100px"
                }`,
              }}
            >
              <div style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "18px" }}>{item?.bankName}</span>

                <span style={{ fontSize: "12px", color: "grey" }}>
                  <strong style={{ color: "#111" }}>
                    {item?.interestRate}
                  </strong>
                  interest rate
                </span>
              </div>
              <div>
                <h2>{item?.profit}</h2>
              </div>
            </div>
            <hr style={{ color: "grey" }} />
            <span style={{ fontSize: "12px", color: "grey" }}>
              {item?.sinceDate}
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default CurrentLoans;
