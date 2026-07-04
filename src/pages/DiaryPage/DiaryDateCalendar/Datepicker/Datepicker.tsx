import React, { useState } from "react";
import DatePicker from "react-datepicker";
import styles from "./Datepicker.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { useDayInfoMutation } from "../../../../redux/api/apiSlice";
import { format } from "date-fns";

const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [dayInfo] = useDayInfoMutation();

  const handleChange = (date: Date | null) => {
    if (!date) return;
    const chousenDate = format(date, "yyyy-MM-dd");

    setIsOpen(!isOpen);
    setStartDate(date);
    dayInfo({
      date: chousenDate,
    });
  };
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.DatePickerSection}>
      <span className={styles.DiaryDate}>
        {format(startDate, "dd-MM-yyyy")}
      </span>

      <button onClick={handleClick} className={styles.DatePickerBtn}></button>
      {isOpen && (
        <DatePicker selected={startDate} onChange={handleChange} inline />
      )}
    </div>
  );
};

export default Datepicker;
