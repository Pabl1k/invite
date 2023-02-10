import { ReactComponent as Heart } from "../../assets/heart.svg";
import "./Names.scss";

const Names = () => {
  return (
    <div className="names namesFont disableSelect">
      <span>Pavel</span>
      <Heart className="names__heart" />
      <span>Jelizaveta</span>
    </div>
  );
};

export default Names;
