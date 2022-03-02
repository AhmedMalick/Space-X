import { gql } from "@apollo/client"

gql`
  query launches($limit: Int!) {
    launches(limit: $limit) {
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
`
