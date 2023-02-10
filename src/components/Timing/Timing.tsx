import { FC } from "react";
import "./Timing.scss";
import { translations } from "../../common/translations";

const Timing: FC<{ language: 0 | 1 }> = ({ language }) => {
  return (
    <div className="timing">
      <div className="timing__line">
        <span className="timing__heart">&#10084;</span>
        <span>{`${translations[language].welcome} 16:30`}</span>
      </div>
      <div className="timing__line">
        <span className="timing__heart">&#10084;</span>
        <span>{`${translations[language].ceremony} - 17:00`}</span>
      </div>
      <div className="timing__line">
        <span className="timing__heart">&#10084;</span>
        <span>{`${translations[language].banquet} - 18:00`}</span>
      </div>
    </div>
  );
};

export default Timing;
