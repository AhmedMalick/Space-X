import { FC } from "react";
import rocketPic from "../../Assets/rocket.jpeg";
import { RocketsQuery } from "../../generated/graphql";
import styles from "./Rockets.module.css";

interface Props {
  data: RocketsQuery | undefined;
}

const Rockets: FC<Props> = ({ data }) => {
  return (
    <div className={styles.rockets}>
      <h1>Rockets</h1>
      {data?.rockets &&
        data.rockets.map((rocket, index) => (
          <div className={styles.card} key={index}>
            <img src={rocketPic} alt="" />
            <div className={styles.container}>
              <h2>{rocket?.name}</h2>
              <p className={styles.desc}>{rocket?.description}</p>
              <div className={styles.space_between}>
                <p>First Flight </p>
                <p>{rocket?.first_flight}</p>
              </div>
              <hr />
              <div className={styles.space_between}>
                <p>Active</p>
                <p>{rocket?.active ? "Yes" : "No"}</p>
              </div>
              <hr />
              <div className={styles.space_between}>
                <p>Cost Per Launch</p>
                <p>{rocket?.cost_per_launch}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Rockets;
