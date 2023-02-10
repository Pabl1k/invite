import { FC } from "react";
import { translations } from "../../common/translations";
import "./Date.scss";

const Date: FC<{ language: 0 | 1 }> = ({ language }) => {
  return (
    <div className="date">
      <span className="date__with-lines">
        {translations[language].august.toUpperCase()}
      </span>
      <span className="date__day">19</span>
      <span className="date__with-lines">2023</span>
    </div>
  );
};

export default Date;
