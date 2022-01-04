import React, { useEffect, useState } from 'react';
import { datesGenerator } from 'dates-generator';
import { ICalendar, IGeneratedDate } from '@components/Timesheet/types';

const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];

const Timesheet = () => {
    //Default selected date is present day
    const [selectedDate, setSelectedDate] = useState(new Date());
    //Dates holds the array with the all dates for the given month
    const [dates, setDates] = useState<Date[]>([]);

    const [calendar, setCalendar] = useState<ICalendar>({
        month: selectedDate.getMonth(),
        year: selectedDate.getFullYear(),
        nextMonth: 0,
        nextYear: 0,
        previousMonth: 0,
        previousYear: 0,
    });

    useEffect(() => {
        const timesheetBody = {
            month: calendar.month,
            year: calendar.year,
        };
        const {
            dates,
            nextMonth,
            nextYear,
            previousMonth,
            previousYear,
        }: IGeneratedDate = datesGenerator(timesheetBody);

        setDates([...dates]);
        setCalendar({
            ...calendar,
            nextMonth,
            nextYear,
            previousMonth,
            previousYear,
        });
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                    <td>Sunday</td>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    );
};

export default Timesheet;
