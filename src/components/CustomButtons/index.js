//packages
import { buttonTitles } from "../../services/constants";

//styles
import "./index.css";

//component
const CustomButtons = ({ isInfoLoaded, onCloseClick, onSearchClick }) => {
  return (
    <div className="buttons-parentContainer">
      <div className="buttons-container">
        <button onClick={onCloseClick} className="button-close">
          {buttonTitles.close}
        </button>

        <button onClick={onSearchClick} className="button-add">
          {isInfoLoaded ? buttonTitles.add : buttonTitles.search}
        </button>
      </div>
    </div>
  );
};
export default CustomButtons;
