import { useQuery } from "../../generated/graphql";
import Loading from "../../Components/Loading/Loading";
import Launches from './Launches'

const LaunchesContainer = () => {

    const { data, loading, error } = useQuery();

    if (loading) {
        return <Loading />
    }

    if (error) {
      return <h1>ERROR</h1>;
    }


    return <Launches data={data} />
}

export default LaunchesContainer
