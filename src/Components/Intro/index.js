import classNames from "classnames/bind";
import styles from "./Intro.module.scss";
import Facebook from "../../img/Facebook.png";
import Github from "../../img/github.png";
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Boy from "../../img/boy.png";
import Glassesimoji from "../../img/glassesimoji.png";
import Thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import LoadingDiv from "../LoadingDiv";

const cx = classNames.bind(styles);

const Intro = () => {
  return (
    <div className={cx("Wrapper")}>
      <div className={cx("v-left")}>
        <div className={cx("v-name")}>
          <span className={cx("v-span")}>Hello I Am</span>
          <span className={cx("v-span-2")}>Trường Sơn</span>
          <span className={cx("v-span-3")}>
            Nhà Phát Triển Font-end Có Kinh Nghiệm Cao Về Thiết Kế Và Phát Triển
            Web , Tạo Ra Sản Phẩm Chất Lượng
          </span>
        </div>
        <button className={cx("v-button", "button")}>Chọn Tôi</button>

        <div className={cx("v-icons")}>
          <a href="https://www.facebook.com/profle.php.id.3107.100035504550108">
            <img
              src={Facebook}
              alt="Có lỗi xảy ra"
              className={cx("v-img", "v-img-fb")}
            />
          </a>
          <a href="https://github.com/truongson09112003">
            <img src={Github} alt="Có lỗi xảy ra" className={cx("v-img")} />
          </a>
          <a href="https://www.instagram.com/truongson0911/">
            <img src={Instagram} alt="Có lỗi xảy ra" className={cx("v-img")} />
          </a>
        </div>
      </div>
      <div className={cx("v-right")}>
        <img
          src={Vector1}
          alt="Có lỗi xảy ra"
          className={cx("v-img-right", "v-img-right-1")}
        />
        <img
          src={Vector2}
          alt="Có lỗi xảy ra"
          className={cx("v-img-right", "v-img-right-2")}
        />
        <img
          src={Boy}
          alt="Có lỗi xảy ra"
          className={cx("v-img-right", "v-img-right-3")}
        />
        <img
          src={Glassesimoji}
          alt="Có lỗi xảy ra"
          className={cx("v-img-right", "v-img-right-4")}
        />
        <div className={cx("v-loading-div", "div-pos")}>
          <LoadingDiv img={Crown} text="Web" text1="Nhà Phát Triển" />
        </div>
        <div className={cx("div-pos", "div-item-1")}>
          <LoadingDiv img={Thumbup} text="Chuyên Thiết Kế" text1="Website" />
        </div>
        {/* Blur div */}
        <div
          className={cx("div-pos", "v-blur")}
          style={{ background: "#eed2ff" }}
        ></div>
        <div
          className={cx("div-pos", "v-blur")}
          style={{
            background: "#C1F5ff",
            top: "290px",
            width: "380px",
            height: "200px",
            left: "-150px",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
