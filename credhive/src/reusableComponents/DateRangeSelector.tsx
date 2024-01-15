import React, { FC, useState } from "react";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { addDays, format } from "date-fns";
import { Button } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateRangeSelectorProps } from "../helpers/interface";

const DateRangeSelector: FC<DateRangeSelectorProps> = ({
  handleDateChange,
  ranges,
  onDoneClick,
}) => {
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

  return (
    <div>
      <Button
        startIcon={<CalendarMonthIcon />}
        size="medium"
        variant="outlined"
        onClick={() => setShowDatePicker(true)}
      >{`${format(ranges[0]?.startDate, "MMM dd, yyyy")} -  ${format(
        ranges[0]?.endDate,
        "MMM dd, yyyy"
      )}`}</Button>
      {showDatePicker && (
        <div style={{ position: "absolute", background: "#fff", zIndex: 1 }}>
          <DateRangePicker
            direction="horizontal"
            scroll={{ enabled: true }}
            onChange={(item) => handleDateChange(item)}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={2}
            maxDate={addDays(new Date(), 0)}
            ranges={ranges}
            retainEndDateOnFirstSelection={true}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginRight: "16px",
            }}
          >
            <Button
              variant="text"
              onClick={() => {
                onDoneClick();
                setShowDatePicker(false);
              }}
            >
              Done
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateRangeSelector;
