import { useEffect, useState } from "react";
import styles from "./App.module.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    async function doFetch() {
      const response = await fetch("/api/hello");
      const result = await response.json();
      setMessage(result.message);
    }
    doFetch();
  }, []);

  return (
    <div className={styles.app}>
      <p>{message}</p>
    </div>
  );
}
export default App;
