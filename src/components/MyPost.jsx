import { useState } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyPost = () => {
    const bidsData = useLoaderData()
    const [bids,setBids]=useState(bidsData)
   
    console.log(bids)
    const handleDelete=(_id)=>{
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            fetch(`http://localhost:5000/myBids/${_id}`,{
                method:'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    // remove brand
                    const remaining = bids.filter(bids => bids._id !== _id)
                    setBids(remaining)
                }
            })
        })

    }
    return (
        <div className="max-w-7xl mx-auto">
            
            {
                bids.map((bids, idx) => <div key={idx}>
                    <div className="flex justify-between bg-gray-100 mb-5 rounded px-10 p-10">
                        <div>
                            <h2 className="card-title">name: <span className="text-[#63B916;]">{bids.name}</span> </h2>
                            <p className="font-bold"> Deadline: {bids.Deadline}</p>
                            <p className="font-bold">price: <span className="text-[#63B916]">$</span> {bids.price}</p>

                        </div>
                        <div className="card-actions ">
                            <button onClick={()=>handleDelete(bids._id)} className="btn btn-square btn-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <Link to={''}>
                                <button className="btn">
                                    Update
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default MyPost;