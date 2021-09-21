import { FC } from "react";
import { LaunchDetailsQuery } from "../../generated/graphql";
import ReactPlayer from "react-player";
import styles from "./LaunchDetails.module.css";

interface Props {
  data: LaunchDetailsQuery | undefined;
}

const LaunchDetails: FC<Props> = ({ data }) => {
  return (
    <div className={styles.launchDetails}>
      <h1>{data?.launch?.mission_name}</h1>
      <div className={styles.info}>
        <div className={styles.col1}>
          {data?.launch?.links?.video_link ? (
            <ReactPlayer
              url={data?.launch?.links?.video_link}
              data-testid="react-player"
              light={true}
              controls={true}
              width="850px"
              height="450px"
            />
          ) : null}
          <p>{data?.launch?.details}</p>
        </div>
        <div className={styles.row}>
          <div className={styles.col2}>
            <h3>Overview</h3>
            <p>
              <span>Rocket</span>
              <span>{data?.launch?.mission_name}</span>
            </p>
            <hr />
            <p>
              <span>Launch Site</span>
              <span>{data?.launch?.launch_site?.site_name_long}</span>
            </p>
            <hr />

            <p>
              <span>Launch Date</span>
              <span>{data?.launch?.launch_date_local}</span>
            </p>
            <hr />

            <p>
              <span>Successful</span>
              <span></span>
            </p>
          </div>
          <div className={styles.col3}>
            <h3>First Stage</h3>
            {data?.launch?.rocket?.first_stage?.cores?.map((core, index) => (
              <div key={index}>
                <p>
                  <span>Flight #</span>
                  <span>{core?.flight}</span>
                </p>
                <hr />
                <p>
                  <span>Landing Intent</span>
                  <span>{core?.landing_intent ? "Yes" : "No"}</span>
                </p>
                <hr />
                <p>
                  <span>Landing Successful</span>
                  <span>{core?.land_success ? "Yes" : "No"}</span>
                </p>
                <hr />
                <p>
                  <span>Landing Type</span>
                  <span>{core?.landing_type}</span>
                </p>
              </div>
            ))}
          </div>
          <div className={styles.col4}>
            <h3>Second Stage</h3>
            {data?.launch?.rocket?.second_stage?.payloads?.map(
              (payload, index) => (
                <div key={index}>
                  <h4 className={styles.payloadNo}>Payload # {++index}</h4>
                  {payload?.payload_type ? (
                    <>
                      <p>
                        <span>Type</span>
                        <span>{payload?.payload_type}</span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  {payload?.orbit ? (
                    <>
                      <p>
                        <span>Orbit</span>
                        <span>{payload?.orbit}</span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  {payload?.payload_mass_kg && payload?.payload_mass_lbs ? (
                    <>
                      <p>
                        <span>Mass</span>
                        <span>
                          {payload?.payload_mass_kg}Kg /{" "}
                          {payload?.payload_mass_lbs}Lbs
                        </span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  {payload?.manufacturer ? (
                    <>
                      <p>
                        <span>Manufacturer</span>
                        <span>{payload?.manufacturer}</span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  {payload?.nationality ? (
                    <>
                      <p>
                        <span>Nationality</span>
                        <span>{payload?.nationality}</span>
                      </p>
                      <hr />
                    </>
                  ) : null}
                  {payload?.customers ? (
                    <p>
                      <span>Customer</span>
                      <span>{payload?.customers}</span>
                    </p>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDetails;
