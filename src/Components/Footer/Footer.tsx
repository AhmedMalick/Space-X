import { Link } from "react-router-dom"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <ul className={styles.links_big}>
          <li>
            <span>SPACE X &copy; 2021</span>
          </li>
          <li>
            <Link to="">TWITTER</Link>
          </li>
          <li>
            <Link to="">YOUTUBE</Link>
          </li>
          <li>
            <Link to="">INSTAGRAM</Link>
          </li>
          <li>
            <Link to="">FLICKR</Link>
          </li>
          <li>
            <Link to="">LINKEDIN</Link>
          </li>
          <li>
            <span>PRIVACY POLICY</span>
          </li>
        </ul>
        <ul className={styles.links_small}>
          <div>
            <li>
              <Link to="">TWITTER</Link>
            </li>
            <li>
              <Link to="">YOUTUBE</Link>
            </li>
            <li>
              <Link to="">INSTAGRAM</Link>
            </li>
            <li>
              <Link to="">FLICKR</Link>
            </li>
            <li>
              <Link to="">LINKEDIN</Link>
            </li>
          </div>
          <div className={styles.text}>
            <li>
              <span>SPACE X &copy; 2021</span>
            </li>
            <li>
              <span>PRIVACY POLICY</span>
            </li>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Footer
