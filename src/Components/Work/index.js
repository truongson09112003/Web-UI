import classNames from "classnames/bind";
import styles from "./Work.module.scss";
import Amazon from "../../img/amazon.png";
import Fiverr from "../../img/fiverr.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import Upwork from "../../img/Upwork.png";
import { useContext } from "react";
import { themContext } from "../../Context";

const cx = classNames.bind(styles);

function Work() {
  const Theme = useContext(themContext);

  const darkMode = Theme.state.darkMode;

  document.title = "Học Tập Và Làm Việc Cùng Với CV Shopp...";

  return (
    <div className={cx("wrapper")}>
      <div className={cx("v-awesome")}>
        <span className={cx("v-span-1")}>Bạn Có Thể Nộp Đơn Ứng Tuyển</span>
        <span
          className={cx("v-span-2")}
          style={darkMode ? { color: "#fff" } : { textAlign: "start" }}
        >
          Vào Tổ Chức Của Chúng Tôi
        </span>
        <span className={cx("v-span-3")}>
          Một Số Vị Trí Chúng Tôi Cần Tuyển Dụng:
          <br />
          Font_end Developer ( FullTime )
          <br />
          Back-End Node JS , SQL .... ( FullTime )
          <br />
          FameWork: React JS , Angular ( FullTime )
        </span>
        <button className={cx("button", "v-button", "v-dowload")}>
          Ứng Tuyển Ngay
        </button>
        <div
          className={cx("blur", "v-blur")}
          style={{ background: "#ABF1FF94" }}
        ></div>
      </div>

      {/* Right */}

      <div className={cx("v-right")}>
        <div className={cx("v-main")}>
          <div className={cx("v-sec-crice", "v-sec-crice-1")}>
            <img src={Upwork} className={cx("v-img-k")} />
          </div>
          <div className={cx("v-sec-crice", "v-sec-crice-2")}>
            <img src={Fiverr} className={cx("v-img-k")} />
          </div>
          <div className={cx("v-sec-crice", "v-sec-crice-3")}>
            <img src={Amazon} className={cx("v-img-k")} />
          </div>
          <div className={cx("v-sec-crice", "v-sec-crice-4")}>
            <img src={Shopify} className={cx("v-img-k")} />
          </div>
          <div className={cx("v-sec-crice", "v-sec-crice-5")}>
            <img src={Facebook} className={cx("v-img-k", "v-img-k-fb")} />
          </div>
        </div>
        <div className={cx("v-back-crice", "v-blue-crice")}></div>
        <div className={cx("v-back-crice", "v-yellow-crice")}></div>
      </div>
      <div className={cx("v-s-e-fsd-loveyou", "s-f-f-g-df")}>
        <h3>FAQS ?</h3>
        <span>Bạn đang gặp khó khăn ?</span>
        <span>Hãy liên hệ đến với tôi ❤️</span>
        <a href="https://www.facebook.com/profle.php.id.3107.100035504550108">
          <span>hãy click vào đây...</span>
        </a>
      </div>
      <span className={cx("brand", "v-ft")}>
        © 2015 - Bản Quyền Thuộc Về Nguyễn Trường Sơn
      </span>
    </div>
  );
}

export default Work;
