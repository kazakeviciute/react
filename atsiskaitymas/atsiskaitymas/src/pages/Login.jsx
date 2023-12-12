import { Formik, Form } from "formik";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import FormField from "../components/FormField";
import Button from "../components/Button";
import { PATHS } from "../routes/consts";
import { loginUser } from "../api/users";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import styles from "./Login.module.scss";
import bgim from "../assets/bgim.jpg"
import { FaRegUser } from "react-icons/fa";


const loginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
});

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      const response = await loginUser(values);
      if (response) {
        setUser(response);
        setError("");
        navigate(PATHS.Home);
      } else {
        setError("Username or password is incorrect");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.loginContainer}>
    
    
      <div className={styles.formWrapper}>
        <h1>Login</h1>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {({ isSubmitting }) => (
            <Form>
            
            <div className={styles.wrapper}>
            <div className={styles.left}>
              <img src={bgim} />
            </div>
            
            <div className={styles.right}>
            
            
            <div>
    <div className={styles.link}>
                Don&apos;t have an account?{" "}
                <Link to={PATHS.Register}>Register here</Link>
              </div>
              
              <div>        
              <Button type="button" disabled={isSubmitting}>
                sign up
              </Button>
              
              <Button type="buttun" disabled={isSubmitting}>
                sign up
              </Button>            
            </div>
            
              <div className={styles.field}>
                <FormField
                  label="Name"
                  name="username"
                  type="text"
                  placeholder="Jay Shaheb"
                />
              </div>
              
              
              <div className={styles.field}>
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              
              <div className={styles.field}>
                <FormField
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              {error && <div className={styles.error}>{error}</div>}
              <Button type="submit" disabled={isSubmitting}>
                Login
              </Button>
              
              </div>
              </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
