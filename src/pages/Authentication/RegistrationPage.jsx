import Lottie from "lottie-react";
import registration from "../../assets/registration.json";
import { Link, useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthSystem/AuthProvider";
import Swal from "sweetalert2";


const RegistrationPage = () => {
  useTitle("Registration");
  const navigate = useNavigate();
  const { registerWithEmail, setUserNamePhoto } = useContext(AuthContext);

  const handelRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, photo, email, password);

    registerWithEmail(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        setUserNamePhoto(createdUser, name, photo)
          .then(() => console.log('name and photo add'))
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: '⛔ Oops...',
              text: err.message
            })
            console.log(err.message);
          })
        Swal.fire({
          icon: 'success',
          title: '🎉 Successfully Register',
        })
        form.reset();
        navigate('/login');
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
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center w-1/2 lg:text-left">
          <Lottie animationData={registration} loop={true} />
        </div>
        <div className="card w-1/2 shadow-2xl bg-base-500">
          <div className="card-body">
            <form onSubmit={handelRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">User Name</span>
                </label>
                <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="url" name="photo" placeholder="Your Photo URL" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name="email" placeholder="Your Email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
              </div>
              <div className="form-control mt-6">
                <input type="submit" className="btn btn-primary" value="Register" />
              </div>
            </form>
            <label className="text-center">
              <p>Already have an account?<Link to='/login' className="btn btn-link">Log in</Link></p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
