import { FC } from "react";
import "./DressCode.scss";
import { translations } from "../../common/translations";

const DressCode: FC<{ language: 0 | 1 }> = ({ language }) => {
  const colors = [
    { color: "#e1d1c2" },
    { color: "#c89385" },
    { color: "#889772" },
    { color: "#37492f" },
    { color: "#000" },
  ];

  return (
    <div className="dressCode">
      <span>
        <strong>{translations[language].dressCode}</strong>{" "}
        {translations[language].dressCodeText}
        <span>&#10084;</span>
      </span>
      <div className="dressCode__container">
        {colors.map((x) => (
          <div
            key={x.color}
            className="dressCode__circle"
            style={{ backgroundColor: x.color }}
          />
        ))}
      </div>
    </div>
  );
};

export default DressCode;
