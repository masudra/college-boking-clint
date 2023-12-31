import { useContext, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import loginBaner from '../../../../public/login.avif'
import { AuthContex } from "../../../Provider/AuthProvider";
import Sociallogin from "../Sociallogin/Sociallogin";
import { sendPasswordResetEmail } from "firebase/auth";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [show, setShow] = useState(false)
    const { login, auth} = useContext(AuthContex)
    const emailRef = useRef();
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const onSubmit = data => {
        login(data.email, data.password)
            .then(result => {
                const logUser = result.user
                console.log(logUser);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: ' LogIn SuccessFull',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })

            })
    };

    const handelForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            alert(' Please provide your email')
            return
        }
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert(' Please check your email')
            })
            .catch((error) => {
                alert(error.message)
            });

    }

    return (
        <div>
            <Helmet>
                <title>Mr Academy || Login </title>
            </Helmet>

            <div className="hero min-h-screen bg-base-200 coverimg">
                <div>
                    <h1 className="text-center text-4xl font-bold text-blue-900"> Please login Now </h1>
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl m-5">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input  type="email"  {...register("email", { required: true })} name="email"   placeholder="email" className="input input-bordered" />
                                        {errors.email && <span className='text-red-600'>Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type={show ? "text" : "Password"} {...register("password", { required: true, minLength: 6, maxLength: 20 })} name="password" placeholder="password" className="input input-bordered" />
                                        <div className="text-xl my-2 " onClick={() => setShow(!show)}>

                                            {
                                                show ? <p className="flex "><input className="w-[25px] h-[25px] " type="checkbox" checked></input><span className="ml-2">Hide Password</span></p> : <p className="flex "> <input className="w-[25px] h-[25px]" type="checkbox"></input><span className="ml-2">Show Password</span></p>
                                            }
                                        </div>
                                        {errors.password && <span className='text-red-600'>Password is required </span>}


                                    </div>

                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" value="Login" />
                                    </div>
                                </div>
                            </form>
                            <label className="label">
                                <p className="label-text-alt  text-xl">Forget Password? <button onClick={handelForgetPassword} className=' link link-hover  text-red-600'>Reset Password </button></p>
                            </label>
                            <label className="label">
                                <p className="label-text-alt  text-xl">New here? <Link className=' link link-hover  text-orange-600' to='/regster'> Create a New Account</Link></p>
                            </label>
                            <Sociallogin></Sociallogin>

                        </div>
                        <div className="text-center lg:text-left m-5">
                            <img className="w-[700px] h-[450px]" src={loginBaner} alt="" />

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;