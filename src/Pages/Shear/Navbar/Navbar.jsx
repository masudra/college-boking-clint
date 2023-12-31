import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContex } from "../../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContex)

  const handelLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: ' LogOut SuccessFull',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {
        alert(error.message)
      })
    }

  
  const naveitem = <>
    <li><Link className="lg:text-xl" to='/'>Home</Link></li>
    <li><Link className="lg:text-xl" to='/colleges'>Colleges</Link></li>
    <li><Link className="lg:text-xl" to='/admission'>Admission</Link></li>
    <li><Link className="lg:text-xl lg:mr-36" to='/mycolleg'>My College</Link></li>


  </>
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {naveitem}
              {user ? <>
            <h1 >{user?.displayName}</h1>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                
                <img src={user?.photoURL} />
              </div>
            </label>
            <button onClick={handelLogout} className="btn">Log Out</button>
          </> : <>
            <Link to='/login' className="btn lg:mr-4 lg:ml-2">Login</Link></>
          }

            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl"><span className="text-sky-600">Campus Connect</span></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {naveitem}
            {user ? <>
            <h1 className="lg:my-auto text-xl lg:mr-2">{user?.displayName}</h1>
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                
                <img src={user?.photoURL} />
              </div>
            </label>
            <button onClick={handelLogout} className="btn lg:mr-4 lg:ml-2">Log Out</button>
          </> : <>
            <Link to='/login' className="btn lg:mr-5">Login</Link></>
          }
          </ul>
        </div>
        {/* <div className="navbar-end">
          
         

        </div> */}
      </div>

    </div>
  );
};

export default Navbar;