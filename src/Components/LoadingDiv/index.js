import classNames from "classnames/bind";
import styles from "./LoadingDiv.module.scss";
import { useContext } from "react";
import { themContext } from "../../Context";

function LoadingDiv({ img, text, text1 }) {
  const cx = classNames.bind(styles);
  const Theme = useContext(themContext);

  const darkMode = Theme.state.darkMode;

  return (
    <div className={cx("wrapper")}>
      <img src={img} alt="" className={cx("v-img")} />
      <span
        className={cx("v-span")}
        style={darkMode ? { color: "black" } : { color: "black" }}
      >
        {text}
        <br />
        {text1}
      </span>
    </div>
  );
}

export default LoadingDiv;
