import { gql } from "@apollo/client"

gql`
  query Rockets {
    rockets {
      name
      description
      first_flight
      active
      cost_per_launch
    }
  }
`
