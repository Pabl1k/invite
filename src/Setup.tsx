import React, { useState } from "react";
import App from "./components/App/App";
import "./styles/Setup.scss";

const Setup = () => {
  const [language, setLanguage] = useState<0 | 1>(0);

  const changeHandler = () => {
    setLanguage((prevState) => (prevState === 0 ? 1 : 0));
  };

  return (
    <div className="setup">
      <App language={language} changeLanguage={changeHandler} />
    </div>
  );
};

export default Setup;
