// Placeholder to host a component
import React from "react";

    const Hours = () => {
        // add logic

        const shelterHours = [
            { day: "Monday", open: "10:00 am", close: "04:00 pm" },
            { day: "Tuesday", open: "10:00 am", close: "04:00 pm" },
            { day: "Wednesday", open: "10:00 am", close: "04:00 pm" },
            { day: "Thursday", open: "10:00 am", close: "04:00 pm" },
            { day: "Friday", open: "10:00 am", close: "04:00 pm" },
            { day: "Saturday", open: "09:00 am", close: "08:00 pm" },
            { day: "Sunday", open: "09:00 am", close: "08:00 pm" },
    
        ]

        // get the long day name and store it in a variable called today
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        // get today's hours
        const todayHours = shelterHours.find((day) => day.day === today);

        // display today and the hours in an div with an id of hours
        return (
            <div id="hours">
                <h2>🕛 Horario de atención de hoy 🐕</h2>
                <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
            </div>
        )
    }

export default Hours;