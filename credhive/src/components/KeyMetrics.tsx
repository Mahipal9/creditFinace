import React from "react";
import { AiOutlineFieldTime } from "react-icons/ai";
import { FaPersonCane } from "react-icons/fa6";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { KeyMetricItem, keyMetric } from "../helpers/interface";

const KeyMetrics: React.FC<keyMetric> = ({ currentYear }) => {
  let keyMetricsData: KeyMetricItem[] = [
    {
      icon: <AiOutlineFieldTime />,
      Heading: "On Time Payments",
      subheading: "On Time Payment completion in %",
    },
    {
      icon: <FaPersonCane />,
      Heading: "Credit Age",
      subheading: "Total credit age since inception",
      type: "creditAge",
    },
    {
      icon: <HiOutlineAdjustmentsHorizontal />,
      Heading: "Credit Utilisation",
      subheading: "Available limit being utilised in %",
    },
  ];

  return (
    <>
      {keyMetricsData.map((item: KeyMetricItem, index) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
            marginTop: "10px",
          }}
          key={index}
        >
          <div style={{ padding: "12px" }}>{item?.icon}</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: "20px", fontWeight: "500", color: "#111" }}
            >
              {item?.Heading}
            </span>
            <span
              style={{ fontSize: "12px", fontWeight: "400", color: "grey" }}
            >
              {item?.subheading}
            </span>
          </div>

          <div>
            {item?.type !== "creditAge" ? (
              <progress
                style={{
                  accentColor: `${
                    item?.Heading === "Credit Utilisation"
                      ? "rgb(110 110 110)"
                      : "green"
                  }`,
                }}
                value={currentYear === "Current Year" ? 80 : 55}
                max={100}
              />
            ) : (
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: "500",
                  marginLeft: "100px",
                }}
              >
                3.4 Years
              </span>
            )}
          </div>

          <div>{`>`}</div>
        </div>
      ))}
    </>
  );
};

export default KeyMetrics;
