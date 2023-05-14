import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { useContext } from 'react';
import { AuthContext } from '../AuthSystem/AuthProvider';
import placeholder from '../assets/placeholder.png';

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handelLogOut = () => {
    logOut().then(() => console.log("User Log Out")).catch(err => console.log(err.message))
  }

  return (
    <div className="navbar max-w">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to='/'>Home</Link></li>
            <li><a href='#about'>About</a></li>
            <li><Link to='/appointments'>My Appointment</Link></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </div>
        <img className='w-20' src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to='/'>Home</Link></li>
          <li><a href='#about'>About</a></li>
          <li><Link to='/appointments'>My Appointment</Link></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        {
          user ? (<div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user.photoURL ? user.photoURL : placeholder} />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li><a>Settings</a></li>
              <li><button onClick={handelLogOut} className='btn btn-outline'>Log Out</button></li>
            </ul>
          </div>)
            :
            <Link to='/login' className="btn btn-secondary btn-lg font-extrabold text-2xl">Log In</Link>
        }


      </div>
    </div>
  );
};

export default Nav;
