import { useState, useEffect } from "react";
import "./CountDownTimer.scss";

const CountDownTimer = ({ date, time }) => {
  // countdown starts here
  const calculateTimeLeft = () => {
    const dateAndTime = `${date} ${time}`;
    const eventDate = new Date(dateAndTime);
    const difference = eventDate - Date.now(); // values are in milliseconds

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(<span key={index}>{pad(timeLeft[interval])}</span>);
    // timerComponents.push(
    //   <span key={index}>
    //     {timeLeft[interval]} {interval}{" "}
    //   </span> // 0 Days 0 Hrs 0 Mins 4 secs
    // );
  });

  function pad(unit) {
    // console.log("just padded");
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }

  return (
    <div className="countdown">
      {timerComponents.length ? timerComponents : <h1>Event Ended</h1>}
    </div>
  );
};
export default CountDownTimer;

// https://www.digitalocean.com/community/tutorials/react-countdown-timer-react-hooks