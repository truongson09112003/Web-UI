import { useContext } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import Toggle from "../Toggle";
import { themContext } from "../../Context";

const cx = classNames.bind(styles);

function Navbar() {
  const Theme = useContext(themContext);
  const darkMode = Theme.state.darkMode;

  return (
    <div className={cx("v-wrapper")}>
      <div className={cx("v-left")}>
        <div className={cx("v-name")}>T.Sơn</div>
        <div className={cx("v-name-mobile")}>
          <label htmlFor="input-v-mobile">
            <label htmlFor="input-v-mobile" className={cx("")}>
              <i className={cx("fa-solid fa-bars", "icon-m-b")}></i>
            </label>
            <input
              type="checkbox"
              id="input-v-mobile"
              className={cx("c-v-n-22062003")}
              // style={{ display: "none" }}
            />
            <ul
              className={cx("v-list-m-b", "bvf")}
              style={darkMode ? { background: "#000" } : { background: "#fff" }}
            >
              <Link
                to="/"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "#fff" : "",
                }}
              >
                <li className={cx("v-list-item-v-c-m", "li-mb-i-o")}>
                  Trang Chủ
                </li>
              </Link>

              <Link
                to="services"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "#fff" : "",
                }}
              >
                <label htmlFor="input-v-mobile">
                  <li className={cx("v-list-item-v-c-m", "li-mb-i-o")}>
                    Dịch Vụ
                  </li>
                </label>
              </Link>
              <Link
                to="experience"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "#fff" : "",
                }}
              >
                <li className={cx("v-list-item-v-c-m", "li-mb-i-o")}>
                  Trải nghiệm
                </li>
              </Link>
              <Link
                to="works"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "#fff" : "",
                }}
              >
                <li className={cx("v-list-item-v-c-m", "li-mb-i-o")}>
                  Công Việc
                </li>
              </Link>
              <Link
                to="checkout"
                style={{
                  background: darkMode ? "black" : "",
                  color: darkMode ? "#fff" : "",
                }}
              >
                <li className={cx("v-list-item-v-c-m", "li-mb-i-o")}>
                  Chứng Thực
                </li>
              </Link>
              <span className={cx("v-list-item-oadsa")}>
                để đóng menu nhấn vào đây
                <br />
                còn lắm bug quá bug dần cái menu reponsive này làm sau hihi
              </span>
            </ul>
          </label>
        </div>
        <Toggle />
      </div>
      <div className={cx("v-right")}>
        <div className={cx("v-right-list")}>
          <ul className={cx("v-list")}>
            <Link
              to="/"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "#fff" : "",
              }}
            >
              <li className={cx("v-list-item")}>Trang Chủ</li>
            </Link>
            <Link
              to="services"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "#fff" : "",
              }}
            >
              <li className={cx("v-list-item")}>Dịch Vụ</li>
            </Link>
            <Link
              to="experience"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "#fff" : "",
              }}
            >
              <li className={cx("v-list-item")}>Trải nghiệm</li>
            </Link>
            <Link
              to="works"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "#fff" : "",
              }}
            >
              <li className={cx("v-list-item")}>Công Việc</li>
            </Link>
            <Link
              to="checkout"
              style={{
                background: darkMode ? "black" : "",
                color: darkMode ? "#fff" : "",
              }}
            >
              <li className={cx("v-list-item")}>Chứng Thực</li>
            </Link>
          </ul>
        </div>
        <Link style={{ display: "block" }} to="contact">
          <button className={cx("v-button", "button", "v-pc")}>
            Liên Hệ Với Chúng Tôi
          </button>
        </Link>
        <Link to="contact">
          <button className={cx("v-button", "button", "mobile-v")}>
            Liên Hệ
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
