import classNames from "classnames/bind";
import styles from "./Service.module.scss";
import Glasses from "../../img/glasses.png";
import Heartemoji from "../../img/heartemoji.png";
import Humble from "../../img/humble.png";
import Card from "../Card";
import CV from "./CV/CV của bạn cám ơn đã sử dụng.pdf";
import { useContext } from "react";
import { themContext } from "../../Context";

const cx = classNames.bind(styles);

function Service() {
  const Theme = useContext(themContext);

  const darkMode = Theme.state.darkMode;

  return (
    <div className={cx("wrapper")}>
      <div className={cx("v-awesome")}>
        <span className={cx("v-span-1")}>Dịch Vụ</span>
        <span
          className={cx("v-span-2")}
          style={darkMode ? { color: "#fff" } : { justifyContent: "center" }}
        >
          Tuyệt Vời Của Chúng Tôi
        </span>
        <span className={cx("v-span-3")}>
          Một Dịch Vụ Nâng Cao Trải Nghiệm Người Dùng Thật Tuyệt Vời Khi Sử Dụng
          <br />
          Dịch Vụ Của Chúng Tôi, Chọn Tải Xuống Ngay ❤️
        </span>
        <a href={CV} download>
          <button className={cx("button", "v-button", "v-dowload")}>
            Download CV
          </button>
        </a>
        <div
          className={cx("blur", "v-blur")}
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>
      <div className={cx("v-right")}>
        <div className={cx("v-t-h-t")}>
          <Card
            emoji={Heartemoji}
            Heading={"Design"}
            Details={"Figma, Sketch, Photoghops, Adobe, Adobe Xd"}
          />
        </div>
        {/* emoij 2 */}
        <div className={cx("v-t-h-t-1")}>
          <Card
            emoji={Glasses}
            Heading={"Developer"}
            Details={"JS, HTML & CSS, ReactJS, JavaScript Type"}
          />
        </div>
        {/* emoij 3 */}
        <div className={cx("v-t-h-t-2")}>
          <Card
            emoji={Humble}
            Heading={"Developer"}
            Details={"JS, HTML & CSS, ReactJS, JavaScript Type"}
          />
        </div>
        <div
          className={cx("blur", "v-blur")}
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
      <span className={cx("brand", "v-ft")}>
        © 2015 - Bản Quyền Thuộc Về Nguyễn Trường Sơn
      </span>
    </div>
  );
}

export default Service;
