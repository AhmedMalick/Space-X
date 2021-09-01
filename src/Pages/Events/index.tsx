import { useEventsQuery } from "../../generated/graphql";
import Loading from "../../Components/Loading/Loading";
import Events from "./Events";

const EventsContainer = () => {
  const { data, loading, error } = useEventsQuery();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <h1>Error..</h1>;
  }

  return <Events data={data} />;
};

export default EventsContainer;
