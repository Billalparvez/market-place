import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center space-y-5 bg-white justify-items-center  ">

                <img data-aos="fade-down" className="w-full h-[700px]" src="https://i.postimg.cc/HnBPLWmB/2634442.jpg" alt="" />
                <Link to={'/'}><button className="btn hover:bg-info bg-[#63B916] text-white">Go To HOme!</button></Link>
      
        </div>
    );
};

export default ErrorPage;