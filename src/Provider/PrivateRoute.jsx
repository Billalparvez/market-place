
import { useContext } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from './AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    if (loading) {
        return <>
            <div className="text-center mt-20">
                <span className="loading loading-spinner text-primary"></span>
                <span className="loading loading-spinner text-secondary"></span>
                <span className="loading loading-spinner text-accent"></span>
            </div>
        </>
    }
    if (user?.email) {
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoute;