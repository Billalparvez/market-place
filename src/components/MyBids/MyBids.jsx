import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
// import { useLoaderData } from "react-router";
// import BidsTab from "./BidsTab";
const MyBids = () => {
    const { user } = useContext(AuthContext)
    // const datas = useLoaderData()
    const [bids, setBids] = useState([])

    const url = `http://localhost:5000/myBids?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBids(data))
    }, [url])
    // console.log(datas)
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
                        </tr>
                    </thead>
                    {
                        bids.map(data =>
                            <thead key={data.id}>
                                <tr>
                                    <th>{data.name}</th>
                                    <td>{data.user_Email}</td>
                                    <td>{data.Deadline}</td>
                                    <td>padding</td>
                                    <button className="btn btn-sm btn-outline">completed</button>
                                </tr>
                            </thead>
                        )
                    }
                </table>
            </div>
        </div >
    );
};

export default MyBids;