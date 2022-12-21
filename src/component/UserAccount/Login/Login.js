import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { toast } from 'react-toastify';
import useTitle from '../../hooks/useTitle';



const Login = () => {
    const [error, setError] = useState('');
    const { userLogin, provaiderLogin } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    useTitle('Login')

    const googleProvider = new GoogleAuthProvider();
    const handlerGoogleSignin = () => {
        provaiderLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Login Seccess', { autoClose: "1000" })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })

    }

    const handlerLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then(result => {
                    console.log(result)
                        navigate(from, { replace: true });
                        toast.success('Login Seccess', { autoClose: "1000" })

                form.reset();
                setError('');
               
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }


    return (

        <div className='bg-blue-200 py-5'>

            <div className="flex flex-col w-5/6 md:w-3/6 lg:w-2/6  bg-slate-900 m-auto p-6 rounded-md sm:p-10 text-gray-100">
                <h1 className="text-2xl font-bold text-center mb-5">Login From!</h1>
                <form onSubmit={handlerLogin} novalidate="" action="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-1 text-sm">
                        <label for="email" className="block dark:text-gray-400">Your Email</label>
                        <input type="text" name="email" placeholder="your email" className="w-full px-4 py-3 rounded-md text-black" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label for="password" className="block dark:text-gray-400">Password</label>
                        <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md text-black" required />
                        <div className="flex justify-end text-xs dark:text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <div className="text-orange-400">
                        {error}
                    </div>
                    <button type="submit" className="block w-full p-3 text-center rounded-md  text-black font-bold bg-info">Sign in</button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                    <p className="px-3 text-sm dark:text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
                </div>
                <div className="flex justify-center space-x-4">
                    <button onClick={handlerGoogleSignin} aria-label="Log in with Google" className="p-3 rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                    </button>
                   
                </div>
                <p className="text-center sm:px-6 dark:text-gray-400">Don't have an account?
                    <Link rel="noopener noreferrer" to='/registion' className="underline text-gray-100 font-bold"> Registration</Link>
                </p>
            </div>

        </div>

    );
};

export default Login;