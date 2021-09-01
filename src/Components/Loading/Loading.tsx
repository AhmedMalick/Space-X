import ReactLoading from "react-loading";
import styles from "./Loading.module.css"

const Loading = () => {
  return (
    <div className={styles.loading}>
      <ReactLoading type={"spin"} color={"#000"} height={"3%"} width={"3%"} />
    </div>
  );
};

export default Loading;
