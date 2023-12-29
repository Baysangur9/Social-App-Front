import styles from "./Header.module.css";

import {ReactComponent as VKLogo} from "../../../assets/vectors/Logo.svg";
import {MdKeyboardArrowDown} from "react-icons/md";
import {HiSearch} from "react-icons/hi";
import {FaBell} from "react-icons/fa";
import InputField from "../../Ui/Input/InputField";

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <a className={styles.logo} href="/">
            <h1>
              <VKLogo />
            </h1>
          </a>
          <div className={styles.handlers}>
            <label htmlFor="" className={styles.search}>
              <HiSearch color="#8FADC8" />
              <InputField type="text" label="Поиск" />
            </label>
            <FaBell color="#1E3C5F" size="20" cursor="pointer" />
          </div>
          <div className={styles.profile}>
            <h3>Rick</h3>
            <div className={styles.avatar}>
              <img
                src="https://kartinki.pics/uploads/posts/2022-03/1646360030_1-kartinkin-net-p-kartinki-rik-1.jpg"
                alt="AVATAR"
              />
              {<MdKeyboardArrowDown color="var(--link-color)" />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
