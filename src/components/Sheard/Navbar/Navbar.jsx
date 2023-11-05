
import "./Navbar.css";
import { NavLink } from "react-router-dom"
// import Bannar from "../../Bannar"
const Navbar = () => {
    const navLinks = <>

        <li> <NavLink to={'/'} >Home</NavLink></li>
        <li> <NavLink to={'/addJob'} >Add job</NavLink></li>
        <li> <NavLink to={'/myBids'} >My Bids</NavLink></li>
        <li> <NavLink to={'/myPost'} >My Post</NavLink></li>
        <li> <NavLink to={'/bidRequests'}>Bid Requests</NavLink></li>
        <li> <NavLink to={'/login'}>SingIn</NavLink></li>
        <li> <NavLink to={'/register'}>Register</NavLink></li>
    </>
    return (

        <div >
            <div className="navbar bg-base-100 my-5 max-w-7xl mx-auto ">
                <div className="navbar-start ">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="flex gap-5 items-center w-full">
                        <img className="w-20 rounded-full" src="https://i.postimg.cc/dV454QDs/rag-dolls-one-blue.jpg" alt="" />
                        <p data-aos="fade-left" className=" inline-block text-lg md:text-3xl font-bold"><span className="text-[#63B916]">Market</span> places</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {/* <a className="btn">Button</a> */}
                </div>
            </div>
           
        </div>
    );
}

export default Navbar;