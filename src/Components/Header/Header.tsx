import { useState } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../../Assets/Images/logo.svg"
import styles from "./Header.module.css"

const Header = () => {
  const [mobNav, setMobNav] = useState(false)

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link to="/#">
            <Logo />
          </Link>
        </div>
        <div className={styles.close_navbar} onClick={() => setMobNav(!mobNav)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`${mobNav ? styles.open_mobile_nav : styles.none}`}>
          <ul>
            <li>
              <Link to="/#">HOME</Link>
            </li>
            <li>
              <Link to="/launches">LAUNCHES</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/rockets">ROCKETS</Link>
            </li>
          </ul>
          <div
            className={`${styles.close_navbar} ${styles.open}`}
            onClick={() => setMobNav(!mobNav)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div>
          <ul className={styles.links}>
            <li>
              <Link to="/#">HOME</Link>
            </li>
            <li>
              <Link to="/launches">LAUNCHES</Link>
            </li>
            <li>
              <Link to="/events">EVENTS</Link>
            </li>
            <li>
              <Link to="/rockets">ROCKETS</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
