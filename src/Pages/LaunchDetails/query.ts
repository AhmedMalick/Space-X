import { gql } from '@apollo/client'

const QUERY_LAUNCH_DETAILS = gql`
      query LaunchDetails($id: ID!) {
  launch(id: $id) {
    mission_name
    details
    upcoming
    is_tentative
    launch_date_local
    launch_success
    launch_site {
      site_name_long
    }
    links {
      video_link
    }
    telemetry {
      flight_club
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          core {
            missions {
              flight
              name
            }
            asds_attempts
            asds_landings
            block
            id
            original_launch
            reuse_count
            rtls_attempts
            rtls_landings
            status
            water_landing
          }
          flight
          gridfins
          land_success
          landing_intent
          landing_type
          landing_vehicle
          legs
          reused
        }
      }
      second_stage {
        payloads {
          manufacturer
          nationality
          customers
          orbit
          payload_type
          reused
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
  }
}
`
    ;