import Lottie from "lottie-react";
import login from "../../assets/login.json";
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthSystem/AuthProvider";
import Swal from "sweetalert2";

const LogInPage = () => {
  useTitle("Log In");
  const { loginWithEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handelLogIn = event => {
    event.preventDefault();
    const form = event.target
    const email = form.email.value;
    const password = form.password.value;

    console.log(email, password);

    loginWithEmail(email, password)
      .then(result => {
        console.log(result.user);
        Swal.fire({
          icon: 'success',
          title: '🎉 Successfully Log In',
        })
        form.reset();
        navigate(from, { replace: true });
      })
      .catch(err => {
        Swal.fire({
          icon: 'error',
          title: '⛔ Oops...',
          text: err.message
        })
        console.log(err.message);
      })
  }


  return (
    <div className="max-w h-[90vh] flex">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-500">
          <div className="card-body">
            <form onSubmit={handelLogIn}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Log in" />
              </div>
            </form>
            <label className="text-center">
              <p>Have not an account? <Link to='/registration' className="btn btn-link">Registration</Link></p>
            </label>
            <div className="divider">OR</div>
            <div className="mx-auto flex gap-4">
              <button className="btn btn-outline rounded-full"><FaGoogle /></button>
              <button className="btn btn-outline rounded-full"><FaFacebookF /></button>
              <button className="btn btn-outline rounded-full"><FaTwitter /></button>
              <button className="btn btn-outline rounded-full"><FaLinkedinIn /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInPage;
