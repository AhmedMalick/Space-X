import { gql } from '@apollo/client'

const QUERY_ROCKETS = gql`
    query Rockets {
  rockets {
      name
      description
      first_flight
      active
      cost_per_launch
  }
}

  `;