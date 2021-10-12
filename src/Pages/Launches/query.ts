import { gql } from '@apollo/client'

const LAUNCHES_QUERY = gql`{
  launches {
    id
    details
    mission_name
    launch_date_local
    launch_success
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
    }
  }
}
`;