import { FC } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Unnamed_1_Query } from "../../generated/graphql";
import styles from "./Launches.module.css";

interface Props {
  data: Unnamed_1_Query | undefined;
}

const Launches: FC<Props> = ({ data }) => {
  return (
    <div className={styles.launches}>
      <h1>Launches</h1>
      <div className={styles.container}>
        {data?.launches?.map((launch, index) => (
          <div className={styles.launch} key={index}>
            <Link className={styles.mission_name} to={`/launch/${launch?.id}`}>
              {launch?.mission_name}
            </Link>
            {launch?.links?.video_link ? (
              <ReactPlayer
                className={styles.video}
                data-testid="react-player"
                light={true}
                controls={true}
                url={launch?.links?.video_link}
              />
            ) : null}
            <p className={styles.details}>{launch?.details}</p>
            <div className={styles.launchDetails}>
              <p>
                <span>LAUNCH DATE:</span>
                {launch?.launch_date_local}
              </p>
              <p>
                <span>LAUNCH SITE:</span>
                {launch?.launch_site?.site_name_long}
              </p>
              <p>
                <span>ROCKET:</span>
                {launch?.rocket?.rocket_name}
              </p>
              <p>
                <span>STATUS:</span>
                {launch?.launch_success ? "Successful" : "Failed"}
              </p>
            </div>
            <Link to={`/launch/${launch?.id}`}>
              <div className={styles.btn}>
                <span>MORE DETAILS</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Launches;
