import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../assets/Providers/AuthProvider";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  const { userLogin, forgotPass, googleLogin, githubLogin } =
    useContext(AuthContext);
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userLogin(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const handleForgotPass = () => {
    const email = emailRef.current.value;
    forgotPass(email)
      .then(() => console.log("check your email"))
      .catch((err) => console.log(err));
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err));
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <h1 className="font-bold text-4xl">Login Now</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a
                  onClick={handleForgotPass}
                  href="#"
                  className="label-text-alt link link-hover"
                >
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="mt-4 flex">
              <p
                onClick={handleGoogleLogin}
                className="flex place-items-center gap-3 btn btn-ghost"
              >
                <FaGoogle></FaGoogle>Google
              </p>
              <p
                onClick={handleGithubLogin}
                className="flex place-items-center gap-3 btn btn-ghost"
              >
                <FaGithub></FaGithub>Github
              </p>
            </div>
          </form>
          <p className="p-4 -mt-10">
            New Here ? Register{" "}
            <Link className="text-blue-600 underline" to="/register">
              here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
