import { useEffect, useState } from "react";
import AppRouter from "components/Router";
import { authService } from "fbase";
import styles from "components/App.module.css";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={isLoggedIn} />
      ) : (
        <div className={styles.init}>Initializing...</div>
      )}
    </>
  );
}

export default App;
