"use client"

import { useState, useEffect } from 'react';


export const  timerfunc = () => {
    

    const targetDate = new Date('2024-12-31T23:59:59').toISOString();

    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };

            return timeLeft
        }
        else {
            timeLeft = {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            };

            return timeLeft
          }

    };
    
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);
    

    return timeLeft ; 

}


