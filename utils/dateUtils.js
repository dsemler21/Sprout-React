export function getDayStringFromDayIndex(date) {
    const today = resetTime(new Date());
    if (dateEquals(resetTime(date), today))
        return "Today";
    today.setDate(today.getDate() + 1);
    const tomorrow = resetTime(today);
    if (dateEquals(resetTime(date), tomorrow))
        return "Tomorrow";
    const day = date.getDay();
    switch (day) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
    }
    return "Some day";
}

export function dateEquals(date1, date2) {
    return date1.getTime() === date2.getTime();
}

export function resetTime(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setMilliseconds(0);
    date.setSeconds(0);
    return date;
}