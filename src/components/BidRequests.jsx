import { useEffect } from "react";
import { useState } from "react";
// import { AuthContext } from "../Provider/AuthProvider";

const BidRequests = () => {
    // const { user } = useContext(AuthContext)
    const [request, SetRequest] = useState([])
    console.log(request)

    const url = `http://localhost:5000/myBids?owner_Email=${request?.owner_Email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => SetRequest(data))
    }, [url])
    return (
        <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>button</th>
                            <th>button</th>
                        </tr>
                    </thead>
                    {
                        request.map((data, idx) =>
                            <thead key={idx}>
                                <tr>
                                    <th>{data.name}</th>
                                    <td>{data.user_Email}</td>
                                    <td>{data.Deadline}</td>
                                    <td>{data.status}</td>
                                    <td><button className="btn btn-outline">Accept</button></td>
                                    <td><button className="btn btn-outline">Reject</button></td>
                                </tr>
                            </thead>
                        )
                    }
                </table>
            </div>
        </div >
    );
};

export default BidRequests;