import React, { useState } from "react";
import CurrentLoans from "../components/CurrentLoans.tsx";
import KeyMetrics from "../components/KeyMetrics.tsx";

import {
  ChartDataType,
  DropDownOption,
  creditDetailsValues,
} from "../helpers/interface.ts";
import { Line } from "react-chartjs-2";
import MenuPopup from "../reusableComponents/MenuPopup.tsx";
import DateRangeSelector from "../reusableComponents/DateRangeSelector.tsx";
import { addDays } from "date-fns";
import { MenuItem, TextField } from "@mui/material";
import { formattedDate } from "../helpers/utils.ts";
import { options } from "../helpers/constants.ts";
import "./routes.css";

const CreditDetails = () => {
  const [startDate, setStartDate] = useState(addDays(new Date(), -7));
  const [endDate, setEndDate] = useState(new Date());
  const [filterOption, setFilterOption] = useState<string>("all_time");

  const [creditDetailsState, setCreditDetailsState] =
    useState<creditDetailsValues>({
      currentLoans: "Current Year",
      interestRatio: "Current Year",
      creditScore: "Current Year",
      keyMetric: "Current Year",
    });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const creditScoreData: ChartDataType = {
    labels: ["APR'23", "JUN'23", "SEP'23", "DEC'23", "APR'24"],
    datasets: [
      {
        label: "Dataset",
        data:
          creditDetailsState?.creditScore === "Current Year"
            ? [20, 11, 20, 5, 17]
            : [26, 30, 25, 37, 25],
        borderColor: "#439040",
        backgroundColor: "#9EC6A6",
        fill: "start",
      },
    ],
  };

  const dropDownOptions: DropDownOption[] = [
    { label: "All Time", value: "all_time" },
    { label: "Current Year", value: "current_year" },
  ];

  const handleOption = (event: any, type: any) => {
    let valueObj = { ...creditDetailsState };
    valueObj[type] = event;
    setCreditDetailsState({
      ...valueObj,
    });
    setAnchorEl(null);
  };

  const handleDateChange = (selectedData) => {
    setStartDate(selectedData.range1.startDate);
    setEndDate(selectedData.range1.endDate);
  };

  const handleFilter = (event: any) => {
    setFilterOption(event?.target?.value);

    if (filterOption === "all_time") {
      setCreditDetailsState({
        ...creditDetailsState,
        currentLoans: "Last Year",
        interestRatio: "Last Year",
        creditScore: "Last Year",
        keyMetric: "Last Year",
      });
    } else {
      {
        setCreditDetailsState({
          ...creditDetailsState,
          currentLoans: "Current Year",
          interestRatio: "Current Year",
          creditScore: "Current Year",
          keyMetric: "Current Year",
        });
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="keyMetricsLeft">
        <div className="headerGap">
          <div>
            <TextField
              sx={{ width: "200px" }}
              select
              label="Select Filter"
              size="small"
              value={filterOption}
              onChange={(event) => handleFilter(event)}
            >
              {dropDownOptions?.map((option) => (
                <MenuItem key={option?.value} value={option?.value}>
                  {option?.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <DateRangeSelector
              handleDateChange={handleDateChange}
              ranges={[
                {
                  startDate: startDate,
                  endDate: endDate,
                  key: "range1",
                },
              ]}
              onDoneClick={() => {
                setCreditDetailsState({
                  ...creditDetailsState,
                  currentLoans: "Last Year",
                  interestRatio: "Last Year",
                  creditScore: "Last Year",
                });
              }}
            />
          </div>
        </div>

        <div className="currentLoansContainer">
          <div className="flex-column">
            <div className="flex-spaceBetween">
              <div className="flex-column">
                <span className="textHeading">Current Loans</span>
                <span className="subHeading">{formattedDate}</span>
                <span className="large-text">
                  ₹
                  {creditDetailsState?.currentLoans === "Current Year"
                    ? "24"
                    : "19"}
                  Cr
                </span>
              </div>

              <div>
                <MenuPopup
                  options={options}
                  selected={creditDetailsState?.currentLoans}
                  handleOption={(option) =>
                    handleOption(option, "currentLoans")
                  }
                />
              </div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <CurrentLoans currentYear={creditDetailsState?.currentLoans} />
            </div>
          </div>
        </div>

        <div className="keyMetrics">
          <div className="flex-column">
            <div className="flex-spaceBetween">
              <span className="textHeading">Key Metrics</span>

              <div>
                <MenuPopup
                  options={options}
                  selected={creditDetailsState?.keyMetric}
                  handleOption={(option) => handleOption(option, "keyMetric")}
                />
              </div>
            </div>
            <div style={{ marginTop: "12px" }}>
              <KeyMetrics currentYear={creditDetailsState?.keyMetric} />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: "55px",
        }}
      >
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
              {creditDetailsState?.interestRatio === "Current Year" ? 302 : 410}
            </span>
            <div className="ratioBox">
              {creditDetailsState?.interestRatio === "Current Year"
                ? "2.4x"
                : "1.8x"}{" "}
              times greater than peers
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={creditDetailsState?.interestRatio}
              handleOption={(option) => handleOption(option, "interestRatio")}
            />
          </div>
        </div>

        <div className="creditContainer" style={{ marginTop: "16px" }}>
          <div className="flex-column">
            <span className="textHeading">Credit Score</span>
            <span className="subHeading">{formattedDate}</span>
            <div className="flex-column">
              <div style={{ display: "flex" }}>
                <span className="large-text" style={{ color: "#449142" }}>
                  {creditDetailsState?.creditScore === "Current Year"
                    ? 789
                    : 695}
                </span>
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
              selected={creditDetailsState?.creditScore}
              handleOption={(option) => handleOption(option, "creditScore")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditDetails;
