
import { useContext } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const AddJob = () => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const handleAddJob = e => {
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
        const addJobs = { email, Job_Title, Deadline, Description, Minimum_price, Maximum_price, category }
        // console.log(addJobs)
        fetch('https://online-marketplace-flame.vercel.app/category', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addJobs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your job store Mongodb success!!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
               navigate('/myPosted')
            })

    }
    return (
        <div className=" ">
            <div>
                <div >
                    <img className=" w-full h-[400px]  " src="https://i.postimg.cc/5tJ78K3h/14305.jpg" alt="" />
                </div>
            </div>
            {/* addJOb Form */}
            <form onSubmit={handleAddJob} className="space-y-3 max-w-7xl mx-auto my-10">
                <p className=" md:text-3xl font-bold text-[#63B916] my-7">Add Jobs</p>

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
                            <input type="text" name="Job_Title" placeholder="Job_Title" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* second-row  */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Deadline</span>
                            {/* <input type="text" placeholder="Deadline" name="Deadline" className="input input-bordered" /> */}
                            <input type="date"  placeholder="Deadline" className="input input-bordered" name="Deadline" id="" />
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Description</span>
                            <input type="text" placeholder="Description" name="Description" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* thrred row */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Minimum price</span>
                            <input type="number" name="Minimum_price" placeholder="Minimum price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Maximum price</span>
                            <input type="number" placeholder="Maximum_price" name="Maximum_price" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                <div className="form-control w-full">
                    <label className="input-group input-group-vertical">
                        <span className="bg-[#63B916] text-white font-bold">Category</span>
                        <select className="select select-bordered " name="category">
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
    );
};

export default AddJob;