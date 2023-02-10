import { FC } from "react";
import Date from "../Date/Date";
import Names from "../Names/Names";
import Map from "../Map/Map";
import Timer from "../Timer/Timer";
import DressCode from "../Dresscode/Dresscode";
import Timing from "../Timing/Timing";
import Start from "../Start/Start";
import TranslateToggle from "../TranslateToggle/TranslateToggle";
import { translations } from "../../common/translations";
import "./App.scss";

const App: FC<{ language: 0 | 1; changeLanguage: () => void }> = ({
  language,
  changeLanguage,
}) => {
  return (
    <div className="app">
      <TranslateToggle language={language} changeLanguage={changeLanguage} />
      <Start />
      <Names />
      <Date language={language} />
      <Timing language={language} />
      <Map language={language} />
      <DressCode language={language} />
      <Timer language={language} />
      <span className="app__final">{translations[language].finalText}</span>
    </div>
  );
};

export default App;
