import { useState, MouseEvent } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import styles from "./Datepicker.module.scss";
import { useDayInfoMutation } from "../../../../redux/api/apiSlice";
import { format } from "date-fns";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [dayInfo] = useDayInfoMutation();

  const handleSelect = (date: Date | undefined) => {
    if (!date) return;
    setIsOpen(false);
    setSelectedDate(date);
    dayInfo({ date: format(date, "yyyy-MM-dd") });
  };

  const handleToggle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.DatePickerSection}>
      <span className={styles.DiaryDate}>{format(selectedDate, "dd-MM-yyyy")}</span>

      <button onClick={handleToggle} className={styles.DatePickerBtn} type="button" />
      {isOpen && <DayPicker mode="single" selected={selectedDate} onSelect={handleSelect} />}
    </div>
  );
};

export default Datepicker;
