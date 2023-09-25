
'use strict'

export const weekDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];


export const monthNames = [
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
    'Dec'
];


// dateUnix: unit date in seconds
// timezone: timezone shift from utc in seconds
export const getDate = (dateUnix, timezone) => {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    // date string 'Sunday 10, Jan'
    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}


// dateUnix: unit date in seconds
// timezone: timezone shift from utc in seconds
export const getTime = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const period = hours >= 12 ? "PM" : "AM";

    // time string 'HH:MM AM/PM'
    return `${hours % 12 || 12}:${minutes} ${period}`;
}

// dateUnix: unit date in seconds
// timezone: timezone shift from utc in seconds
export const getHours = (timeUnix, timezone) => {
    const date = new Date((timeUnix + timezone) * 1000);
    const hours = date.getUTCHours();
    const period = hours >= 12 ? "PM" : "AM";

    // time string 'HH AM/PM'
    return `${hours % 12 || 12} ${period}`;
}

// mps: metter per seconds
export const mps_to_kmh = mps => {
    const mph = mps * 3600;

    // kilometer per hour
    return mph / 1000;
}


export const aqiText = {
    1: {
        level: 'Good',
        message: 'Air qulaity is considered satisfactory, and air pollution poses little or no risk'
    },
    2: {
        level: 'Fair',
        message: `Air qulaity is acceptable, however, for some pollutants there may be a moderate 
            health concern for very small number of people who 
            are usually sensitive to air pollution.`
    },
    3: {
        level: 'Moderate',
        message: `Members of sensitive groups may experience health effects.
                The general public is not likely to be affected.`
    },
    4: {
        level: 'Poor',
        message: `Everyone may begin to experience health effects; member of
                sensitive groups may experience more serious health effects.`
    },
    5: {
        level: 'Very Poor',
        message: `Health warnings of emergency conditions. the entire
            population is more likely to be affected.`
    }
}