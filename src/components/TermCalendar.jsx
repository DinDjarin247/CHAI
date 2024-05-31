import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { Box } from "@mui/material";
import { format } from "date-fns"; // date-fns 패키지 사용하여 날짜 형식 지정
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const TermCalendar = ({ setDateTerm }) => {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleChange = (item) => {
    setState([item.selection]);
    const startDate = format(item.selection.startDate, "yyyy-MM-dd");
    const endDate = format(item.selection.endDate, "yyyy-MM-dd");
    setDateTerm(`${startDate}~${endDate}`);
  };

  return (
    <Box>
      <DateRange
        editableDateInputs={true}
        onChange={handleChange}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </Box>
  );
};

export default TermCalendar;
