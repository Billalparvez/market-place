import { Link } from "react-router-dom"

const WebDevCart = ({ category }) => {
    const { _id, Job_Title, Deadline, Maximum_price, Minimum_price, Description } = category
    return (
        <div data-aos="fade-down" className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src="https://i.postimg.cc/6qD7rjfC/istockphoto-1061299140-1024x1024.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">Job Title: <span className="text-[#63B916]">{Job_Title}</span></h2>
                <p className="text-2xl"><span className="text-[#63B916]">Date:</span> {Deadline}</p>
                <p className="text-2xl">Maximum Price: <span className="text-[#63B916]">$</span> {Maximum_price}</p>
                <p className="text-2xl">Minimun Prices: <span className="text-[#63B916]">$</span> {Minimum_price}</p>
                <p className="text-2xl"><span className="text-[#63B916] font-bold">Description:</span> {Description}</p>
                <div className="card-actions justify-end">
                    <Link to={`/jobDetails/${_id}`}> <button className="btn bg-[#63B916] border-none text-white">Bid Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default WebDevCart;