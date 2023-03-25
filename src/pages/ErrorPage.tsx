import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.errorSection}>
      <div>
        <h3 onClick={() => navigate("/")}>Page can not be found.</h3>
        <div className={styles.backBtn}>
          <button onClick={() => navigate("")}>Back to main page</button>
        </div>
      </div>
    </div>
  );
};
