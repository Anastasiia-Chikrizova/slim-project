import { useState } from "react";
import ReactDatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Datepicker = () => {
  const [startDate, setStartDate] = useState<Date>(new Date());
  return (
    <ReactDatePicker selected={startDate} onChange={(date) => { if (date) setStartDate(date); }} />
  );
};

export default Datepicker;