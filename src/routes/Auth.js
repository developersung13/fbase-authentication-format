import { authService, firebaseInstance } from "fbase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import styles from "routes/Auth.module.css";
import AuthForm from "components/AuthForm";

function Auth() {
  const onSocialClick = async (event) => {
    const {
      target: { name },
    } = event;
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    await authService.signInWithPopup(provider);
  };
  return (
    <div className={styles.authContainer}>
      <FontAwesomeIcon icon={faUser} size="3x" />
      <h1 className={styles.iconText}>Sign in to YOUR_PROJECT</h1>
      <AuthForm />
      <div className={styles.authBtns}>
        <button onClick={onSocialClick} name="google"></button>
        <FontAwesomeIcon icon={faGoogle} />
        <button onClick={onSocialClick} name="github"></button>
        <FontAwesomeIcon icon={faGithub} />
      </div>
    </div>
  );
}

export default Auth;
