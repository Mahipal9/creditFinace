import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { addDays } from "date-fns";
import DateRangeSelector from "../reusableComponents/DateRangeSelector.tsx";
import { financialInformation } from "../helpers/interface.ts";
import { MenuItem, TextField } from "@mui/material";
import MenuPopup from "../reusableComponents/MenuPopup.tsx";
import { options } from "../helpers/constants.ts";
import { formattedDate } from "../helpers/utils.ts";
import "./routes.css";

const Documents = () => {
  const [startDate, setStartDate] = useState(addDays(new Date(), -7));
  const [endDate, setEndDate] = useState(new Date());
  const [filterOption, setFilterOption] = useState<string>("all_time");
  const [financialInfoStates, setFinancialInfoStates] =
    useState<financialInformation>({
      netRevenue: "Current Year",
      netProfit: "Current Year",
    });

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const netRevenue = {
    labels: ["APR'23", "JUN'23", "SEP'23", "DEC'23", "APR'24"],
    datasets: [
      {
        label: "Dataset 1",
        data:
          financialInfoStates?.netRevenue === "Current Year"
            ? ["12", "34", "34", "43", "32"]
            : ["42", "33", "44", "78", "23"],
        borderColor: "#0F90C2",
        backgroundColor: "#0F90C2",
        stack: "combined",
        type: "bar",
      },
      {
        label: "Dataset 1",
        data:
          financialInfoStates?.netRevenue === "Current Year"
            ? ["14", "24", "53", "43", "23"]
            : ["42", "42", "23", "13", "24"],
        borderColor: "#B45A8B",
        backgroundColor: "#B45A8B",
        stack: "combined",
        type: "bar",
      },
      {
        label: "Dataset 2",
        data:
          financialInfoStates?.netRevenue === "Current Year"
            ? ["31", "85", "97", "123", "52"]
            : ["42", "33", "44", "78", "23"],
        borderColor: "#347893",
        backgroundColor: "#347893",
        stack: "combined",
      },
    ],
  };

  const netProfit = {
    labels: ["APR'23", "JUN'23", "SEP'23", "DEC'23", "APR'24"],
    datasets: [
      {
        label: "Dataset 1",
        data:
          financialInfoStates?.netProfit === "Current Year"
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
          financialInfoStates?.netProfit === "Current Year"
            ? ["21", "31", "39", "48", "24"]
            : ["21", "43", "32", "32", "55"],
        borderColor: "#347893",
        backgroundColor: "#347893",
        stack: "combined",
      },
    ],
  };

  const dropDownOptions = [
    { label: "All Time", value: "all_time" },
    { label: "Current Year", value: "current_year" },
  ];

  const handleOption = (event: any, type: any) => {
    let valueObj = { ...financialInfoStates };
    valueObj[type] = event;
    setFinancialInfoStates({
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
      setFinancialInfoStates({
        ...financialInfoStates,
        netRevenue: "Last Year",
        netProfit: "Last Year",
      });
    } else {
      setFinancialInfoStates({
        ...financialInfoStates,
        netRevenue: "Current Year",
        netProfit: "Current Year",
      });
    }
  };

  return (
    <div
      style={{
        display: "flex",

        background: "#fff",
        padding: "16px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", columnGap: "12px" }}>
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
              setFinancialInfoStates({
                ...financialInfoStates,
                netRevenue: "Last Year",
                netProfit: "Last Year",
              });
            }}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          columnGap: "16px",
        }}
      >
        <div className="netRevenue">
          <div className="flex-column">
            <span className="textHeading">Net Revenue</span>
            <span className="subHeading">{formattedDate}</span>
            <span className="large-text">₹ 1.37 Cr</span>
            <div style={{ marginTop: "12px" }}>
              <Line data={netRevenue} className="chartSize" />
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={financialInfoStates?.netRevenue}
              handleOption={(option) => handleOption(option, "netRevenue")}
            />
          </div>
        </div>

        <div className="netProfit">
          <div className="flex-column">
            <span className="textHeading">Net Profit</span>
            <span className="subHeading">{formattedDate}</span>
            <span className="large-text">₹ 1.37 Cr</span>
            <div style={{ marginTop: "12px" }}>
              <Line data={netProfit} className="chartSize" />
            </div>
          </div>
          <div>
            <MenuPopup
              options={options}
              selected={financialInfoStates?.netProfit}
              handleOption={(option) => handleOption(option, "netProfit")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;
