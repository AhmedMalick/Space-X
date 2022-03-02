import { useEventsQuery } from "../../generated/graphql"
import Loading from "../../Components/Loading/Loading"
import Events from "./Events"
import styles from "./Events.module.css"

const EventsContainer = () => {
  const { data, loading, error } = useEventsQuery()

  if (loading) {
    return <Loading />
  }

  if (error) {
    return (
      <div className={styles.error}>
        <p>{error.message}</p>
      </div>
    )
  }
  return <Events data={data} />
}

export default EventsContainer
