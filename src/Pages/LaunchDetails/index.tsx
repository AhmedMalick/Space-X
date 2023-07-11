import { useParams } from "react-router"
import Loading from "../../Components/Loading/Loading"
import LaunchDetails from "./LaunchDetails"
import { useLaunchDetailsQuery } from "../../generated/graphql"
import styles from "./LaunchDetails.module.css"

const LaunchDetailsContainer = () => {
  const { id } = useParams()

  const { data, loading, error } = useLaunchDetailsQuery({
    variables: { id: id ? id : "" },
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

  return <LaunchDetails data={data} />
}

export default LaunchDetailsContainer
