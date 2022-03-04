import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"
import hamburger_1 from "../../Assets/Images/hamburger-1.svg"
import hamburger_2 from "../../Assets/Images/hamburger-2.svg"
import styles from "./Header.module.css"

const Header = () => {
  const [nav, setNav] = useState("close")

  const toggleNav = () => {
    nav === "close" ? setNav("open") : setNav("close")
  }

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.big_nav}>
          <div
            className={`${
              nav === "close" ? styles.big_close_nav : styles.hide
            }`}
          >
            <div>
              <Link to="#home">
                <Logo />
              </Link>
            </div>
            <div>
              <img
                className={styles.hamburger}
                src={hamburger_1}
                onClick={toggleNav}
                alt="hamburger"
              />
            </div>
          </div>
          <div
            className={`${nav === "open" ? styles.big_open_nav : styles.hide}`}
          >
            <div>
              <ul>
                <li>
                  <Link className={styles.link} to="/#">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/launches">
                    LAUNCHES
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/events">
                    EVENTS
                  </Link>
                </li>
                <li>
                  <Link className={styles.link} to="/rockets">
                    ROCKETS
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <img
                className={styles.hamburger}
                src={hamburger_2}
                onClick={toggleNav}
                alt="hamburger"
              />
            </div>
          </div>
        </div>
        <div className={styles.small_nav}>
          <div>
            <a href="/">
              <Logo />
            </a>
          </div>
          <div className={styles.small_nav_right}>
            <Link className={styles.link} to="/#">
              HOME
            </Link>
            <Link className={styles.link} to="/launches">
              LAUNCHES
            </Link>
            <Link className={styles.link} to="/events">
              EVENTS
            </Link>
            <Link className={styles.link} to="/rockets">
              ROCKETS
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
