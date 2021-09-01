import { gql } from '@apollo/client'

const QUERY_EVENTS = gql`
  query Events {
    histories {
        details
        event_date_utc
        title
        flight {
            links {
                video_link
            }
        }
    }
}
`;