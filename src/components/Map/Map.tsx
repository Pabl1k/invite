import "./Map.scss";
import image from "../../assets/map/map1.jpg";
import { translations } from "../../common/translations";
import { FC } from "react";

const Map: FC<{ language: 0 | 1 }> = ({ language }) => {
  const link =
    "https://www.google.com/maps/dir//Bebr%C5%B3+kalnas,+28312/@55.4541275,25.7896202,10.39z/data=!4m9!4m8!1m0!1m5!1m1!1s0x46dd507ff871643b:0xea2ffcf6cfb17db6!2m2!1d25.7788852!2d55.4394485!3e0";

  return (
    <div className="map">
      <strong>{translations[language].celebrationPlace}</strong>
      <span style={{ fontSize: 16 }}>Bebrų kalnas, Utenos apsk.</span>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        title={translations[language].openInMaps}
      >
        <img src={image} alt="map" />
      </a>
    </div>
  );
};

export default Map;
