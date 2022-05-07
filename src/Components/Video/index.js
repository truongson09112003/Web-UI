import { useContext } from "react";
import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import video from "../../video/mv.mp4";
import CV from "../Services/CV/CV của bạn cám ơn đã sử dụng.pdf";
import { themContext } from "../../Context";

const cx = classNames.bind(styles);

function Video() {
  const Theme = useContext(themContext);
  const darkMode = Theme.state.darkMode;

  document.title = "Trải Nghiệm Cùng Với CV Shopp...";

  return (
    <div className={cx("wrapper")}>
      <video autoPlay playsInline loop className={cx("video")}>
        <source src={video} />
      </video>
      <div className={cx("video-px")}>
        <h4
          className={cx("ic-kh")}
          style={darkMode ? { color: "#fff" } : { color: "#000" }}
        >
          Bạn Có Muốn Tải Xuống CV ?
        </h4>
        <a href={CV} download>
          <button className={cx("button", "v-s-f")}>Download CV</button>
        </a>
      </div>
      <div className={cx("video-px-y")}>
        <h4
          className={cx("ic-kh-ui")}
          style={darkMode ? { color: "#fff" } : { color: "#000" }}
        >
          Bạn Có Muốn Tạo Mới CV ?
        </h4>
        <a href="https://cv.fullstack.edu.vn/">
          <button className={cx("button", "v-s-f")}>Click ME</button>
        </a>
      </div>
      <div className={cx("video-px-y-mobile", "ms-d-fe")}>
        <span className="span-video">
          Có phải bạn đang gặp khó khăn ?
          <br />
        </span>
        <span className="span-video">
          hãy liên hệ với chúng tôi ❤️❤️
          <br />
        </span>
        <span className="span-video">
          Mọi vấn đề có thể giải quyết hãy tận hưởng cuộc sống 💕😘
        </span>
        <span className="span-video">
          <br />
          Tôi luôn bên bạn 😘❤️
        </span>
        <a href="http://facebook.com" className="btn btn-primary-fdfd">
          <span className="span-video">
            <br />
            Bạn có thể liên hệ đến tôi hay click vào đây ...
          </span>
        </a>
      </div>
      <span className={cx("brand", "v-ft")}>
        © 2015 - Bản Quyền Thuộc Về Nguyễn Trường Sơn
      </span>
    </div>
  );
}

export default Video;
