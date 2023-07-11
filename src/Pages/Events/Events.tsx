import { FC } from "react"
import { EventsQuery } from "../../generated/graphql"
import formatDate from "../../utils/formatDate"
import styles from "./Events.module.css"

interface Props {
  data: EventsQuery | undefined
}

const Events: FC<Props> = ({ data }) => {
  return (
    <div className={styles.events}>
      <h1>Events</h1>
      <div className={styles.card_wrapper}>
        {data?.histories &&
          data.histories.map((history, index) => (
            <div key={index} className={styles.card}>
              <h3>{history?.title}</h3>
              <div>
                <p>{history?.details}</p>
                <h2>{formatDate(new Date(history?.event_date_utc))}</h2>
              </div>
              <div className={styles.btn_wrapper}>
                <a
                  href={history?.links?.article ? history?.links?.article : ""}
                  className={styles.btn}
                >
                  <span>READ ARTICLE</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default Events
