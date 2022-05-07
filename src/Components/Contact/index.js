import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import className from "classnames/bind";
import styles from "./Contact.module.scss";
import { useContext } from "react";
import { themContext } from "../../Context";

const cx = className.bind(styles);

function Contact() {
  document.title = "Liên Hệ Với Tôi";

  const Theme = useContext(themContext);

  const darkMode = Theme.state.darkMode;

  const form = useRef();

  const [done, setDone] = useState(false);
  const [state, setState] = useState("");
  const [state2, setState2] = useState("");
  const [state3, setState3] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_m81ijgp",
        "template_53oi45r",
        form.current,
        "Mq-j13_bD31By31W8"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setState("");
          setState2("");
          setState3("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("v-left")}>
        <div className={cx("v-awesome")}>
          <span className={cx("v-span-1")}>Thông Báo Tới Chúng Tôi</span>
          <span
            className={cx("v-span-2")}
            style={darkMode ? { color: "#fff" } : { justifyContent: "center" }}
          >
            Thông Báo Bởi email
          </span>
          <div
            className={cx("blur", "v-blur")}
            styles={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      <div className={cx("v-right")}>
        <form className={cx("v-form")} ref={form} onSubmit={sendEmail}>
          <input
            value={state}
            type="text"
            name="user_name"
            className={cx("user")}
            placeholder="Name"
            onChange={(e) => setState(e.target.value)}
            autoFocus
          />
          <input
            value={state2}
            type="email"
            name="user_email"
            className={cx("user")}
            placeholder="Email"
            onChange={(e) => setState2(e.target.value)}
          />
          <textarea
            value={state3}
            name="message"
            className={cx("user", "x-c-vg")}
            placeholder="Message"
            onChange={(e) => setState3(e.target.value)}
          />
          <input
            value="Send"
            type="submit"
            className={cx("button", "v-b-hg")}
          />
          <span>
            {done && "Cảm Ơn Bạn Đã Phản Hồi Với Chúng Tôi 😊❤️😊❤️❤️"}
          </span>
          <div
            className={cx("blur", "v-blur-1")}
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
