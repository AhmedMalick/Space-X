import { useState } from "react"
import { useLaunchesQuery } from "../../generated/graphql"
import Loading from "../../Components/Loading/Loading"
import Launches from "./Launches"
import styles from "./Launches.module.css"

const LaunchesContainer = () => {
  const [limit, setLimit] = useState(10)

  const { data, loading, error } = useLaunchesQuery({
    variables: { limit },
  })

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

  return <Launches limit={limit} setLimit={setLimit} data={data} />
}

export default LaunchesContainer
