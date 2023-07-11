import { gql } from "@apollo/client"

gql`
  query Events {
    histories {
      details
      event_date_utc
      title
      links {
        article
      }
    }
  }
`
