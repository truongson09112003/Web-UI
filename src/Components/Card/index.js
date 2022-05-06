import classNames from "classnames/bind";
import styles from "./card.module.scss";

const cx = classNames.bind(styles);

function Card({ emoji, Heading, Details }) {
  return (
    <div className={cx("card")}>
      <img src={emoji} alt="Có lỗi xảy ra" className={cx("v-img")} />
      <span className={cx("v-span-1")}>{Heading}</span>
      <span className={cx("v-span-2")}>{Details}</span>
      <button className={cx("v-button")}>Learn More</button>
    </div>
  );
}

export default Card;
