import { useState } from 'react';
import { useDatePicker, DPDay } from '@rehookify/datepicker';
import classnames from "classnames";

const DatePicker = () => {
    const [selectedDates, onDatesChange] = useState<Date[]>([]);

    const res = useDatePicker({selectedDates, onDatesChange, locale: {locale: "he-IL"}, dates: {mode: "range", selectSameDate: true,}, calendar: {
        offsets: [-1]
    }});
    const [_, calendar] = res.data.calendars;
    const {days, month, year} = calendar;
    const formattedDates = res.data.formattedDates;
    const subStractProps = res.propGetters.subtractOffset;
    const addProps = res.propGetters.addOffset;
    
    const [start, end] = formattedDates;

  const rangeBtnClassnames = (dayObj: DPDay) => {
    return classnames("btn" ,{"btn-primary": dayObj.range || dayObj.selected}, {"btn-disabled": !(dayObj.inCurrentMonth || dayObj.range || dayObj.selected) || dayObj.disabled})
  }

  return (
    <div>
        <p className="text-primary">חודש נוכחי: {month}</p>
        <p className="text-primary">שנה נוכחית: {year}</p>
        <div className="grid grid-cols-7 text-center gap-2">
            {res.data.weekDays.map(item => <p className="font-bold" key={item}>{item}</p>)}
            {days.map(dayObj => (
                <button className={rangeBtnClassnames(dayObj)} key={dayObj.$date.toString()} {...res.propGetters.dayButton(dayObj)}>
                    {dayObj.day}
                </button>
            ))}
        </div>
        <p className='text-white font-bold'>תאריך ראשון: {start}</p>
        <p className='text-white font-bold'>תאריך שני: {end}</p>
        <button className='btn' {...subStractProps({months: 1})}>חודש קודם</button>
        <button className='btn' {...addProps({months: 1})}>חודש הבא</button>
    </div>
  )
}

  export default DatePicker;