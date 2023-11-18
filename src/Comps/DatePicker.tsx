import { MouseEvent, useState } from 'react';
import { useDatePicker,  } from '@rehookify/datepicker';

const DatePicker = () => {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);

  const res = useDatePicker({selectedDates, onDatesChange, locale: {locale: "he-IL"}, dates: {mode: "range", }});
  const calendars = res.data.calendars;
  const formattedDates = res.data.formattedDates;

//   console.log(res.data.weekDays)
    const calendar = calendars[0];
    console.log(calendar);

  const [start, end] = formattedDates;
  console.log(formattedDates);
  return (
    <div>
        <p className="text-primary">עומדים להראות פה תאריכים!</p>
        <div className="grid grid-cols-7 text-center gap-4">
            {res.data.weekDays.map(item => <p className="font-bold" key={item}>{item}</p>)}
            {calendar.days.map(dayObj => (
                <button className={`btn ${dayObj.inCurrentMonth ? "btn-primary" : "disabled"}`} key={dayObj.day} {...res.propGetters.dayButton(dayObj)}>
                    {dayObj.day}
                </button>
            ))}
            {JSON.stringify(formattedDates)};
        </div>
    </div>
  )
}

  export default DatePicker;