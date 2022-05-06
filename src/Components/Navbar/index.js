import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";

const cx = classNames.bind(styles);

function Navbar() {
  return (
    <div className={cx("v-wrapper")}>
      <div className={cx("v-left")}>
        <div className={cx("v-name")}>T.Sơn</div>
        <span className={cx("v-toggle")}>Toggle</span>
      </div>
      <div className={cx("v-right")}>
        <div className={cx("v-right-list")}>
          <ul className={cx("v-list")}>
            <li className={cx("v-list-item")}>Trang Chủ</li>
            <li className={cx("v-list-item")}>Dịch Vụ</li>
            <li className={cx("v-list-item")}>Kinh nghiệm</li>
            <li className={cx("v-list-item")}>Đầu Tư</li>
            <li className={cx("v-list-item")}>Chứng Thực</li>
          </ul>
        </div>
        <button className={cx("v-button", "button")}>
          Liên Hệ Với Chúng Tôi
        </button>
      </div>
    </div>
  );
}

export default Navbar;
