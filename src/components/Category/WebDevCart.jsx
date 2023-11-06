import {Link} from "react-router-dom"

const WebDevCart = ({ category }) => {
    const {_id, Job_Title, Deadline, Maximum_price, Minimum_price, Description } = category
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{Job_Title}!</h2>
                    <p>{Deadline}</p>
                    <p>{Maximum_price}</p>
                    <p>{Minimum_price}</p>
                    <p>{Description}</p>
                    <div className="card-actions justify-end">
                       <Link to={`/jobDetails/${_id}`}> <button className="btn btn-primary">Bid Now</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebDevCart;