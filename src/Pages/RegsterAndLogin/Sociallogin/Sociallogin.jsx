import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContex } from '../../../Provider/AuthProvider';

const Sociallogin = () => {
    const { googleLogIn } = useContext(AuthContex)
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handelGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const logUser = result.user
                console.log(logUser);
                navigate(from, { replace: true });

            })
            .catch(error => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                })
            })
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center pb-4">
                <button onClick={handelGoogleLogin} className="btn btn-primary "><FaGoogle></FaGoogle>Login With Google</button>

            </div>
        </div>
    );
};

export default Sociallogin;