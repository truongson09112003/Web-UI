import classNames from "classnames/bind";
import styles from "./Video.module.scss";
import video from "../../video/mv.mp4";
import CV from "../Services/CV/CV của bạn cám ơn đã sử dụng.pdf";

const cx = classNames.bind(styles);

function Video() {
  return (
    <div className={cx("wrapper")}>
      <video autoPlay playsInline loop className={cx("video")}>
        <source src={video} />
      </video>
      <div className={cx("video-px")}>
        <h4 className={cx("ic-kh")}>Bạn Có Muốn Tải Xuống CV ?</h4>
        <a href={CV} download>
          <button className={cx("button", "v-s-f")}>Download CV</button>
        </a>
      </div>
      <div className={cx("video-px-y")}>
        <h4 className={cx("ic-kh-ui")}>Bạn Có Muốn Tạo Mới CV ?</h4>
        <a href="https://cv.fullstack.edu.vn/">
          <button className={cx("button", "v-s-f")}>Click ME</button>
        </a>
      </div>
      <span className={cx("brand", "v-ft")}>
        © 2015 - Bản Quyền Thuộc Về Nguyễn Trường Sơn
      </span>
    </div>
  );
}

export default Video;
