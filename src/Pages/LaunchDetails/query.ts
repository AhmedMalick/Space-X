import { gql } from "@apollo/client"

gql`
  query LaunchDetails($id: ID!) {
    launch(id: $id) {
      mission_name
      details
      launch_date_local
      launch_site {
        site_name_long
      }
      links {
        video_link
      }
      rocket {
        first_stage {
          cores {
            flight
            land_success
            landing_intent
            landing_type
          }
        }
        second_stage {
          payloads {
            manufacturer
            nationality
            customers
            orbit
            payload_type
            payload_mass_lbs
            payload_mass_kg
          }
        }
      }
    }
  }
`
