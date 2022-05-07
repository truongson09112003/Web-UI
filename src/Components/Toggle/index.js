import className from "classnames/bind";
import styles from "./Toggle.module.scss";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import { useContext } from "react";
import { themContext } from "../../Context";

const cx = className.bind(styles);

function Toggle() {
  const Theme = useContext(themContext);
  const darkMode = Theme.state.darkMode;

  const HandleClick = () => {
    Theme.dispatch({ type: "toggle" });
  };

  return (
    <div className={cx("wrapper", "toggle")}>
      <Moon />
      <Sun />
      <div
        className={cx("v-b-hJ")}
        onClick={HandleClick}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
}

export default Toggle;
