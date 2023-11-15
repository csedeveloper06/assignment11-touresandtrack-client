import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";
import bell from '../../src/bell.json'
import Lottie from "lottie-react";


const PrivateRoute = ({children}) => {

    const { user,loading } = useContext(AuthContext);

    if(loading){
        return <Lottie className="w-28 h-28" animationData={bell} />
    }

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' replace></Navigate>
};

export default PrivateRoute;