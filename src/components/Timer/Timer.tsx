import { FC, useEffect, useState } from "react";
import { translations } from "../../common/translations";
import "./Timer.scss";

const EXACT_DATE = "Aug 19, 2023 17:00:00";

interface TimeLeft {
  months: string;
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

const dateFormat = (period: number) => {
  const strPeriod = period.toString();

  return strPeriod.length < 2 ? `0${period}` : strPeriod;
};

const Timer: FC<{ language: 0 | 1 }> = ({ language }) => {
  const date = new Date();
  const targetDate = new Date(EXACT_DATE).valueOf();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [{ months, days, hours, minutes, seconds }, setTimeLeft] = useState(
    {} as TimeLeft
  );

  const timerState = [
    { title: translations[language].months, value: months },
    { title: translations[language].days, value: days },
    { title: translations[language].hours, value: hours },
    { title: translations[language].minutes, value: minutes },
    { title: translations[language].seconds, value: seconds },
  ];

  const remainingTime = targetDate - currentTime;

  const remainingMonths = Math.floor(
    remainingTime / (1000 * 60 * 60 * 24 * 30)
  );
  const remainingDays = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const remainingHours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const remainingMinutes = Math.floor(
    (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
  );
  const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  setTimeout(() => {
    setCurrentTime(date.valueOf());
  }, 1000);

  useEffect(() => {
    setTimeLeft((prevState) => ({
      ...prevState,
      months: remainingMonths.toString(),
      days: remainingDays.toString(),
      hours: dateFormat(remainingHours),
      minutes: dateFormat(remainingMinutes),
      seconds: dateFormat(remainingSeconds),
    }));
  }, [currentTime]);

  return (
    <div className="timer">
      <span>{translations[language].timeLeft}</span>
      <div className="timer__container">
        {timerState.map((period) => (
          <div
            key={period.title}
            className={`timer__column ${language === 1 && "lt"}`}
          >
            <span>{period.title}</span>
            <span className="timer__digits">{period.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timer;
