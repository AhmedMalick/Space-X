import { useParams } from "react-router";
import Loading from '../../Components/Loading/Loading'
import LaunchDetails from './LaunchDetails'
import { useLaunchDetailsQuery } from "../../generated/graphql";

const LaunchDetailsContainer = () => {
  const { id } = useParams();

  const { data, loading, error } = useLaunchDetailsQuery({
    variables: { id },
  });
    
    if (loading) {
        <Loading />
    }

    if (error) {
      <h1>Error</h1>;
    }

  return <LaunchDetails data={data} /> ;
};

export default LaunchDetailsContainer;
