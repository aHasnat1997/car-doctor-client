import Lottie from "lottie-react";
import login from "../../assets/login.json";
import { FaGoogle, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const LogInPage = () => {
  return (
    <div className="max-w h-[90vh] flex">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-1/2 lg:text-left">
          <Lottie animationData={login} loop={true} />
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-500">
          <div className="card-body">
            <form>
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
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
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
