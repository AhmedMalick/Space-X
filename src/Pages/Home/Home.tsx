import { Link } from 'react-router-dom'
import video from '../../Assets/video.mp4'
import styles from './Home.module.css'

const Home = () => {
    return (
        <div>

            <section className={styles.section1}>
                <div className={styles.left}>
                    <h4>UPCOMING LAUNCHES</h4>
                    <h1>CRS-23 MISSION</h1>
                    <div className={styles.btn}>
                        <Link to='/'>REWATCH</Link>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <svg width="30px" height="20px">
                        <path stroke="#ffffff" strokeWidth="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000" fill='transparent'></path>
                    </svg>
                </div>
            </section>

            <section className={styles.section2}>
                <div className={styles.left}>
                    <h4>RECENT LAUNCHES</h4>
                    <h1>TRANSPORTER-2 MISSION</h1>
                    <div className={styles.btn}>
                        <Link to='/'>REWATCH</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section3}>
                <div className={styles.left}>
                    <h1>STARSHIP TO LAND NASA ASTRONAUTS ON THE MOON</h1>
                    <div className={styles.btn}>
                        <Link to='/'>LEARN MORE</Link>
                    </div>
                </div>
            </section>

            <section className={styles.section4}>
                <div className={styles.video}>
                    <video autoPlay loop muted>
                        <source src={video} type='video/mp4' />
                    </video>
                </div>
                <div className={styles.left}>
                    <h1>DRAGON DOCKING SIMULATOR</h1>
                    <p>Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
                    <div className={styles.btn}>
                        <Link to='/'>TRY NOW</Link>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Home
