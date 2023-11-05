import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center justify-items-center ">
            
                <h1>Oppp sorry</h1>
                <Link to={'/'}><button className="btn btn-info text-white">Go To HOme!</button></Link>
      
        </div>
    );
};

export default ErrorPage;