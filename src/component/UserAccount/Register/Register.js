import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';

const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    useTitle('regicter')

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handlerRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
                handlerUpdateUserProfile(name, photoURL)
                toast.success('Registion Seccess', { autoClose: "1000" })
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }


    const handlerUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))

    }


    return (
        <div className=' bg-blue-200 py-5'>
            <div className="flex flex-col w-5/6 md:w-3/5 lg:w-3/6 bg-slate-900 m-auto p-6 rounded-md sm:p-10 text-gray-100">
                <div className="mb-8 text-center">
                    <h3 className='text-center mb-4 text-4xl font-bold'>Create a Account</h3>
                </div>
                <form onSubmit={handlerRegister} className="space-y-12 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4">
                        <div>
                            <label for="email" className="block mb-2 text-sm">Your Name</label>
                            <input type="text" name="name" placeholder="Your name" className="w-full px-3 py-2 border rounded-md text-black" required />
                        </div>
                        <div >
                            <label for="email" className="block mb-2 text-sm">Photo Url</label>
                            <input id="photoUrl" type="text" name='photoUrl' placeholder="https://" className="w-full px-3 py-2 border rounded-md text-black" />
                        </div>
                        <div>
                            <label for="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md text-black" required />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label for="password" className="text-sm">Password</label>
                                <Link rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">Forgot password?</Link>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md text-black" required />
                        </div>
                    </div>
                    <div className="text-orange-400">
                        {error}
                    </div>
                    <div className="space-y-2">
                        <button type="submit" className="w-full px-8 py-3  rounded-md bg-info  text-black font-bold">Registration</button>

                    </div>
                </form>
                <p className="px-6  text-center mt-5 dark:text-gray-400">Don't have an account yet?
                    <Link rel="noopener noreferrer" to='/login' className="hover:underline dark:text-violet-400 font-bold"> Login</Link>.
                </p>
            </div>
        </div>
    );
};

export default Register;