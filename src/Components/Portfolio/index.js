import classNames from "classnames/bind";
import styles from "./Postfolio.module.scss";
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import Hoc from "../../img/hoc.png";
import Musicapp from "../../img/musicapp.png";
import Shoppe from "../../img/shoppe.jpg";
import Tiki from "../../img/tiki.jpg";
import Profile1 from "../../img/profile1.jpg";
import Profile2 from "../../img/profile2.jpg";
import Profile3 from "../../img/profile3.jpg";
import Profile4 from "../../img/profile4.jpg";
import Profile5 from "../../img/profile5.jpg";
import Profile6 from "../../img/profile6.jpg";
import Slider from "react-slick";
import { useContext } from "react";
import { themContext } from "../../Context";

const cx = classNames.bind(styles);

function Portfolio() {
  const Theme = useContext(themContext);

  const darkMode = Theme.state.darkMode;

  document.title = "Một Số Công Việc Liên Quan Với CV Shopp...";

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: "480px",
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={cx("wrapper")}>
      {/* Heading */}
      <div className={cx("v-h-t")}>
        <span
          className={cx("v-span-1")}
          style={darkMode ? { color: "#fff" } : { justifyContent: "center" }}
        >
          Dự Án Gần Đây
        </span>
        <span className={cx("v-span-2")}>
          Được Chúng Tôi Chú Trọng Và Phát Triển
        </span>
      </div>
      {/* Sider */}
      <div>
        <h2> Dự án 2021</h2>
        <Slider {...settings}>
          <div className={cx("v-h-ut")}>
            <img src={Sidebar} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Ecommerce} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Hoc} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Musicapp} className={cx("v-img-k-hu-yu")} />
          </div>
        </Slider>
      </div>
      <div>
        <h2> Dự án 2022</h2>
        <Slider {...settings}>
          <div className={cx("v-h-ut")}>
            <img src={Musicapp} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Shoppe} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Tiki} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Sidebar} className={cx("v-img-k-hu-yu")} />
          </div>
        </Slider>
      </div>
      <div>
        <h2 style={{ padding: "10px 0" }}>Một số developer của chúng tôi</h2>
        <Slider {...settings}>
          <div className={cx("v-h-ut")}>
            <img src={Profile1} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Profile2} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Profile3} className={cx("v-img-k-hu-yu")} />
          </div>
          <div>
            <img src={Profile4} className={cx("v-img-k-hu-yu")} />
          </div>
        </Slider>
      </div>
      <span className={cx("brand", "v-ft")}>
        © 2015 - Bản Quyền Thuộc Về Nguyễn Trường Sơn
      </span>
    </div>
  );
}

export default Portfolio;
