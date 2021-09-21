import { useRocketsQuery } from '../../generated/graphql'
import Loading from '../../Components/Loading/Loading'
import Rockets from './Rockets'

const RocketsContainer = () => {

    const { data, loading, error } = useRocketsQuery();

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <h1>Error..</h1>
    }

    return <Rockets data={data} />
}

export default RocketsContainer
