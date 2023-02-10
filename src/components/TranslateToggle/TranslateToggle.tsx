import { FC } from "react";
import "./TranslateToggle.scss";

const TranslateToggle: FC<{
  language: 0 | 1;
  changeLanguage: () => void;
}> = ({ language, changeLanguage }) => {
  return (
    <div className="translate">
      <button onClick={changeLanguage}>{language === 0 ? "LT" : "RU"}</button>
    </div>
  );
};

export default TranslateToggle;
