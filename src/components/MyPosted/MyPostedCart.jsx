import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";


const MyPostedCart = ({ myPost }) => {
    const {user}=useContext(AuthContext)
    const { _id,  Deadline, email, Maximum_price, Minimum_price } = myPost
    const [postCart, setPostCart] = useState([])
    // console.log(myPost)
    const handlDelete = (id) => {
        console.log(id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })

        fetch(`http://localhost:5000/category/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                    // remove brand
                    const remaining = postCart.filter(post => post._id !== id)
                    setPostCart(remaining)
                }
            })
    }
    return (

        <div className="flex justify-between bg-gray-100 mb-5 rounded px-10 p-10 max-w-7xl mx-auto">
            <div className="flex gap-10 text-xl">
                <div>
                    <h2 className="card-title text-xl">name: <span className="text-[#63B916]">{user.name}</span> </h2>
                    <p className="font-bold"> Email: {email}</p>
                    <p className="font-bold"> Deadline: {Deadline}</p>
                </div>
                <div>

                    <p className="font-bold">price: <span className="text-[#63B916]">$</span> {Minimum_price}</p>
                    <p className="font-bold">price: <span className="text-[#63B916]">$</span> {Maximum_price}</p>
                </div>
            </div>
            <div className="card-actions ">
                <button onClick={() => handlDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                <Link to={''}> <button className="btn btn-outline">
                    Update
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                </Link>
            </div>
        </div>

    );
};

export default MyPostedCart;