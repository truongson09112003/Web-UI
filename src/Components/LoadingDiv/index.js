import classNames from "classnames/bind";
import styles from "./LoadingDiv.module.scss";

const cx = classNames.bind(styles);

function LoadingDiv({ img, text, text1 }) {
  return (
    <div className={cx("wrapper")}>
      <img src={img} alt="" className={cx("v-img")} />
      <span className={cx("v-span")}>
        {text}
        <br />
        {text1}
      </span>
    </div>
  );
}

export default LoadingDiv;
