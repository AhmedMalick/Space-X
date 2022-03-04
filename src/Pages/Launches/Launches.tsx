import { FC } from "react"
import { Link } from "react-router-dom"
import { LaunchesQuery } from "../../generated/graphql"
import styles from "./Launches.module.css"

interface Props {
  limit: number
  setLimit: (limit: number) => void
  data: LaunchesQuery | undefined
}

const Launches: FC<Props> = ({ limit, setLimit, data }) => {
  return (
    <div className={styles.launches}>
      <h1>Launches</h1>
      <div className={styles.container}>
        {data?.launches?.map((launch, index) => (
          <div className={styles.launch} key={index}>
            <div className={styles.launch_content}>
              <Link
                className={styles.mission_name}
                to={`/launch/${launch?.id}`}
              >
                {launch?.mission_name}
              </Link>
              <p className={styles.details}>{launch?.details}</p>
              <p>
                <span>LAUNCH DATE:</span>
                {new Date(launch?.launch_date_local).toLocaleString()}
              </p>
              <p>
                <span>LAUNCH SITE:</span>
                {launch?.launch_site?.site_name_long}
              </p>
              <p>
                <span>ROCKET:</span>
                {launch?.rocket?.rocket_name}
              </p>
              <p>
                <span>STATUS:</span>
                {launch?.launch_success ? "Successful" : "Failed"}
              </p>
              <Link to={`/launch/${launch?.id}`}>
                <div className={styles.btn}>
                  <span>MORE DETAILS</span>
                </div>
              </Link>
              <span className={styles.circle} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.btn_wrapper}>
        <button
          disabled={limit >= 110}
          className={`${styles.btn} ${limit >= 110 && styles.disabled}`}
          onClick={() => {
            setLimit(limit + 10)
          }}
        >
          <span>LOAD MORE</span>
        </button>
      </div>
    </div>
  )
}

export default Launches
