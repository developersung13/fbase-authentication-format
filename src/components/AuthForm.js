import { authService } from "fbase";
import { useState } from "react";
import styles from "components/AuthForm.module.css";

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [error, setError] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        // create account
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        // log in
        data = await authService.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setError(error.message.slice(9, error.message.indexOf(".") + 1));
    }
  };
  const closeErrorMsg = () => setError(false);
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const toggleAccount = () => setNewAccount((prev) => !prev);
  return (
    <div className={styles.authInput}>
      {error && (
        <>
          <span className={styles.errorMsg}>
            {error}
            <button onClick={closeErrorMsg}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </span>
          <div className={styles.whiteSpace}></div>
        </>
      )}
      <form onSubmit={onSubmit}>
        <label htmlFor="email" className={styles.authInput__email__label}>
          Email address
        </label>
        <input
          name="email"
          type="email"
          value={email}
          required
          onChange={onChange}
          autoFocus={true}
          className={styles.authInput__email}
        />
        <label htmlFor="password" className={styles.authInput__password__label}>
          Password
        </label>
        <input
          name="password"
          type="password"
          value={password}
          required
          minLength={6}
          onChange={onChange}
          className={styles.authInput__password}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign in"}
          className={styles.authSubmit}
        />
      </form>
      <span className={styles.auth__toggle}>
        {newAccount || "New to YourPro?"}&nbsp;
        <span onClick={toggleAccount} className={styles.auth__toggle__text}>
          {newAccount ? "Sign in" : "Create Account ."}
        </span>
      </span>
    </div>
  );
}

export default AuthForm;
