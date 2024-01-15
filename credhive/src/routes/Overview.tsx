import React, { useState } from "react";
import { Doughnut, Line } from "react-chartjs-2";
import { CiMenuKebab } from "react-icons/ci";
import {
  ChartDataType,
  NetProfitChart,
  OverviewDropdownState,
} from "../helpers/interface.ts";
import "./routes.css";
import "chart.js/auto";
import MenuPopup from "../reusableComponents/MenuPopup.tsx";
import { formattedDate } from "../helpers/utils.ts";
import { options } from "../helpers/constants.ts";

const Overview = () => {
  const [overviewDropdownValue, setOverviewDropdownValue] =
    useState<OverviewDropdownState>({
      employees: "Current Year",
      interest: "Current Year",
      totalFund: "Current Year",
      creditScore: "Current Year",
      netProfit: "Current Year",
    });
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // constants
  const employeeStates: ChartDataType = {
    labels: ["Male", "Female"],
    datasets: [
      {
        label: "My First Dataset",
        data:
          overviewDropdownValue?.employees === "Current Year"
            ? [300, 150]
            : [300, 70],
        backgroundColor: ["#3987A6", "#D3E5ED"],
        hoverOffset: 4,
        circumference: 180,
        rotation: 270,
        spacing: 2,
      },
    ],
  };

  const creditScoreData: ChartDataType = {
    labels: ["APR'23", "JUN'23", "SEP'23", "DEC'23", "APR'24"],
    datasets: [
      {
        label: "Dataset",
        data:
          overviewDropdownValue?.creditScore === "Current Year"
            ? [20, 11, 20, 5, 17]
            : [26, 30, 25, 37, 25],
        borderColor: "#439040",
        backgroundColor: "#9EC6A6",
        fill: "start",
      },
    ],
  };

  const fundRaise: ChartDataType = {
    labels: ["Debt Fund", "Equity Fund"],
    datasets: [
      {
        label: "Total Fund Raised",
        data:
          overviewDropdownValue?.totalFund === "Current Year"
            ? [32.62, 24]
            : [10, 4],
        backgroundColor: ["#D6E4EA", "#CD4B00"],
        hoverOffset: 4,
        rotation: 150,
      },
    ],
  };

  const netProfit: ChartDataType = {
    labels: ["APR'23", "JUN'23", "SEP'23", "DEC'23", "APR'24"],
    datasets: [
      {
        label: "Dataset 1",
        data:
          overviewDropdownValue?.netProfit === "Current Year"
            ? ["12", "34", "34", "43", "32"]
            : ["13", "32", "42", "32", "43"],
        borderColor: "#0F90C2",
        backgroundColor: "#0F90C2",
        stack: "combined",
        type: "bar",
      },

      {
        label: "Dataset 2",
        data:
          overviewDropdownValue?.netProfit === "Current Year"
            ? ["21", "31", "39", "48", "24"]
            : ["21", "43", "32", "32", "55"],
        borderColor: "#347893",
        backgroundColor: "#347893",
        stack: "combined",
      },
    ],
  };

  // constants end here

  const handleOption = (event: string, type: string) => {
    let valueObj = { ...overviewDropdownValue };
    valueObj[type] = event;
    setOverviewDropdownValue({
      ...valueObj,
    });
    setAnchorEl(null);
  };

  return (
    <div className="Overview">
      <div className="flex-column">
        <div className="no-of-employees">
          <div className="flex-column">
            <span className="textHeading">No. of Employees</span>
            <span className="subHeading">{formattedDate}</span>
            <span className="large-text">
              {overviewDropdownValue?.employees === "Current Year" ? 450 : 370}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <MenuPopup
              options={options}
              selected={overviewDropdownValue?.employees}
              handleOption={(option) => handleOption(option, "employees")}
            />
            <div>
              <Doughnut data={employeeStates} />
            </div>
          </div>
        </div>

        {/* component1 */}

        <div className="interestRatio">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="textHeading">Interest Coverage Ratio</span>
            <span className="subHeading">{formattedDate}</span>
            <span className="large-text">
              {overviewDropdownValue?.interest === "Current Year" ? 302 : 410}
            </span>
            <div className="ratioBox">
              {overviewDropdownValue?.interest === "Current Year"
                ? "2.4x"
                : "1.8x"}{" "}
              times greater than peers
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={overviewDropdownValue?.interest}
              handleOption={(option) => handleOption(option, "interest")}
            />
          </div>
        </div>

        {/* component2 */}

        <div className="fundRaiseContainer">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="flex-column">
              <span className="textHeading">Total Fund Raised</span>
              <span className="subHeading">{formattedDate}</span>
              <span className="large-text">₹ 56.62 Cr</span>
            </div>
            <div>
              <MenuPopup
                options={options}
                selected={overviewDropdownValue?.totalFund}
                handleOption={(option) => handleOption(option, "totalFund")}
              />
            </div>
          </div>

          <div>
            <Doughnut data={fundRaise} />
          </div>
        </div>
      </div>
      {/* component3 */}

      <div className="flex-column">
        <div className="creditContainer">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span className="textHeading">Credit Score</span>
            <span className="subHeading">{formattedDate}</span>
            <div className="flex-column">
              <div style={{ display: "flex" }}>
                <span className="large-text">789</span>
                <span className="creditScoreMax">/900</span>
              </div>

              <progress
                style={{ accentColor: "green", width: "auto" }}
                value={0.8}
              />
            </div>
            <div style={{ width: "500px" }}>
              <Line data={creditScoreData} />
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={overviewDropdownValue?.creditScore}
              handleOption={(option) => handleOption(option, "creditScore")}
            />
          </div>
        </div>
        {/* component4 */}
        <div className="netProfit">
          <div className="flex-column">
            <span className="textHeading">Net Profit</span>
            <span className="subHeading">{formattedDate}</span>
            <span className="large-text">₹ 1.37 Cr</span>
            <div style={{ marginTop: "12px" }}>
              <Line
                data={netProfit}
                style={{ width: "500px", height: "500px" }}
              />
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={overviewDropdownValue?.netProfit}
              handleOption={(option) => handleOption(option, "netProfit")}
            />
          </div>
        </div>
        {/* component5 */}
      </div>
    </div>
  );
};

export default Overview;
