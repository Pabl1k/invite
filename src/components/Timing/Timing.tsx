import { FC } from "react";
import { ReactComponent as Heart } from "../../assets/heart.svg";
import { translations } from "../../common/translations";
import "./Timing.scss";

const Timing: FC<{ language: 0 | 1 }> = ({ language }) => {
  return (
    <div className="timing">
      <div className="timing__line">
        <Heart className="timing__heart" />
        <span>{`${translations[language].welcome} 16:30`}</span>
      </div>
      <div className="timing__line">
        <Heart className="timing__heart" />
        <span>{`${translations[language].ceremony} - 17:00`}</span>
      </div>
      <div className="timing__line">
        <Heart className="timing__heart" />
        <span>{`${translations[language].banquet} - 18:00`}</span>
      </div>
    </div>
  );
};

export default Timing;
