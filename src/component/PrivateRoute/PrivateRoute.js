import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user, loding} = useContext(AuthContext);
    const location = useLocation();

    if(loding){
        return <div>
         <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
        
        </div>
    }


    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
   
};

export default PrivateRoute;