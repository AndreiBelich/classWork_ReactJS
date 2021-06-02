import React, { useState } from "react";
import style from './Calendar.module.sass';
import {
  setDate,
  endOfMonth,
  getWeeksInMonth,
  startOfWeek,
  add,
  eachWeekOfInterval,
} from "date-fns";
import Week from "./Week";
import CalendarHeader from "./CalendarHeader";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  /*const weeksInMonth = getWeeksInMonth(currentDate);
  const startOfWeekDate = startOfWeek(currentDate);
   const nextWeekDate = add(startOfWeekDate, {days: 1,})
  const tomorrowDate = add(currentDate, {
    days: 1,
  })*/
  const weeksInMonthArray = eachWeekOfInterval({
    start: setDate(currentDate, 1),
    end: endOfMonth(currentDate),
  });

  console.dir(weeksInMonthArray);

  const weeks = weeksInMonthArray.map((weekStartDate) => (
    <Week startDate={weekStartDate} key={weekStartDate.toLocaleDateString()} />
  ));
  return (
    <div className={style.container}>
      <CalendarHeader />
      {weeks}
    </div>
  );
}