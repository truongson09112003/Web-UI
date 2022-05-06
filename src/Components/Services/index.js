import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import Glasses from "../../img/glasses.png";
import Heartemoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";

const cx = classNames.bind(styles);

function Service() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("v-awesome")}>
        <span>Dịch Vụ</span>
        <span>Tuyệt Vời Của Chúng Tôi</span>
        <spane>
          Một Dịch Vụ Nâng Cao Trải Nghiệm Người Dùng Thật Tuyệt Vời Khi Sử Dụng
          <br />
          Dịch Vụ Của Chúng Tôi ❤️
        </spane>
        <button className={cx("button", "v-button")}>Download CV</button>
        <div
          className={cx("blur", "v-blur")}
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      <div className={cx("v-right")}></div>
    </div>
  );
}

export default Service;
