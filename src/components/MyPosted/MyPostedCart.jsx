import { useContext } from "react";
import { useState } from "react";
// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import { useNavigate } from "react-router";


const MyPostedCart = ({ myPost,data,handlDelete }) => {
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    const { _id, Deadline, email, Maximum_price,category, Minimum_price,Job_Title, } = myPost
    
    // console.log(data)
   
    // update
    const handlUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const Job_Title = form.Job_Title.value
        const Deadline = form.Deadline.value
        const Description = form.Description.value
        const Minimum_price = form.Minimum_price.value
        const Maximum_price = form.Maximum_price.value
        const category = form.category.value
        // input Value store Objects
        const update = { email, Job_Title, Deadline, Description, Minimum_price, Maximum_price, category }
        fetch(`http://localhost:5000/category/${_id}`,{
            method:'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if (data.modifiedCount>0) {
                Swal.fire({
                    title: 'success!',
                    text: 'Do Update successfull',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate("/")
            }
        })

    }
    return (

        <div className="flex justify-between bg-gray-100 mb-5 rounded px-10 p-10 max-w-7xl mx-auto">
            <div className="flex gap-10 text-xl">
                <div>
                <p className="font-bold"> Job_Title: <span className="text-[#63B916]">{Job_Title}</span></p>
                    <p className="font-bold"> Email: {email}</p>
                    <p className="font-bold"> Deadline: {Deadline}</p>
                </div>
                <div>
                <p className="font-bold"> category: {category}</p>
                    <p className="font-bold">Minimum_price: <span className="text-[#63B916]">$</span> {Minimum_price}</p>
                    <p className="font-bold">Maximum_price: <span className="text-[#63B916]">$</span> {Maximum_price}</p>
                </div>
            </div>
            <div className="card-actions ">
                <button onClick={() => handlDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
                {/* <Link to={'handlUpdate'}> <button onClick={handlUpdate} className="btn btn-outline">
                    Update
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="green"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                </button>
                </Link> */}

                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button className="btn" onClick={() => document.getElementById('my_modal_4').showModal()}>Update</button>
                <dialog id="my_modal_4" className="modal">
                    <div className="modal-box w-11/12  max-w-5xl h-2/3">
                        <div className="modal-action">

                            <form onSubmit={handlUpdate} className="space-y-3 max-w-7xl mx-auto my-10">
                                <p className=" md:text-3xl font-bold text-[#63B916] my-7">Update Form</p>

                                {/* first-row */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="form-control w-full">
                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Employer Email</span>
                                            <input type="text" name="email" value={user.email} readOnly placeholder="Employer Email" className="input input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Job Title</span>
                                            <input type="text" name="Job_Title" defaultValue={data.Job_Title} placeholder="Job_Title" className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* second-row  */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="form-control w-full">
                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Deadline</span>
                                            {/* <input type="text" placeholder="Deadline" name="Deadline" className="input input-bordered" /> */}
                                            <input type="date" placeholder="Deadline" defaultValue={data.Deadline} className="input input-bordered" name="Deadline" id="" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full">

                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Description</span>
                                            <input type="text" placeholder="Description" defaultValue={data.Description} name="Description" className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                {/* thrred row */}
                                <div className="flex flex-col md:flex-row gap-3">
                                    <div className="form-control w-full">
                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Minimum price</span>
                                            <input type="number" name="Minimum_price" defaultValue={data.Minimum_price} placeholder="Minimum price" className="input input-bordered" />
                                        </label>
                                    </div>
                                    <div className="form-control w-full">
                                        <label className="input-group input-group-vertical">
                                            <span className="bg-[#63B916] text-white font-bold">Maximum price</span>
                                            <input type="number" placeholder="Maximum_price" defaultValue={data.Maximum_price} name="Maximum_price" className="input input-bordered" />
                                        </label>
                                    </div>
                                </div>
                                <div className="form-control w-full">
                                    <label className="input-group input-group-vertical">
                                        <span className="bg-[#63B916] text-white font-bold">Category</span>
                                        <select className="select select-bordered " defaultValue={data.category} name="category">
                                            <option disabled selected> category</option>
                                            <option>web development</option>
                                            <option>digital marketing</option>
                                            <option>graphics design</option>
                                        </select>
                                    </label>
                                </div>
                                <input type="submit" value="Add job button" className=" bg-gradient-to-r btn w-full to-[#63B916] text-white  from-indigo-500  " />
                            </form>
                          
                        </div>
                    </div>
                </dialog>

            </div>
        </div>

    );
};

export default MyPostedCart;