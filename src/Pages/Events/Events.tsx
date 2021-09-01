import { FC } from "react";
import { EventsQuery } from "../../generated/graphql";
import ReactPlayer from "react-player";
import styles from "./Events.module.css";

interface Props {
  data: EventsQuery | undefined;
}

const Events: FC<Props> = ({ data }) => {
  return (
    <div className={styles.events}>
      <h1>Events</h1>
      <div className={styles.card_wrapper}>
        {data?.histories &&
          data.histories.map((history, index) => (
            <div key={index} className={styles.card}>
              <h3>{history?.title}</h3>
              {history?.flight ? (
                <ReactPlayer
                  url={JSON.stringify(history?.flight?.links?.video_link)}
                  width="560px"
                  height="315px"
                />
              ) : (
                <ReactPlayer
                  url="https://www.youtube.com/embed/x-KiDqxAMU0"
                  width="560px"
                  height="315px"
                />
              )}
              <div className={styles.time}>
                <p>{history?.details}</p>
                <h2>{history?.event_date_utc}</h2>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Events;
