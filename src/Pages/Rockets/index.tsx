import { useRocketsQuery } from "../../generated/graphql"
import Loading from "../../Components/Loading/Loading"
import Rockets from "./Rockets"
import styles from "./Rockets.module.css"

const RocketsContainer = () => {
  const { data, loading, error } = useRocketsQuery()

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

  return <Rockets data={data} />
}

export default RocketsContainer
