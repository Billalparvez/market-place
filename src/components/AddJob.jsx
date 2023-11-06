

const AddJob = () => {
    return (
        <div className=" ">
            <div>
                <div >
                    {/* <img className="relative w-full h-[400px] object-fill " src="https://i.ibb.co/WtGsczR/2-150.jpg" alt="" /> */}
                    {/* <img className="relative w-full h-[400px] object-cover " src="https://i.ibb.co/183qZSG/2lyo-5omm-230125.jpg" alt="" /> */}
                    <img className=" w-full h-[400px] object-cover " src="https://i.ibb.co/kxFR03W/80-cm-Vtb3-Rl-X3dvcmtpbmct-MDg.jpg" alt="" />
                </div>

            </div>
            {/* addJOb Form */}

            <form onSubmit={''} className="space-y-3 max-w-7xl mx-auto my-10">
                <p className=" md:text-3xl font-bold text-[#63B916] my-7">Add Jobs</p>
                {/* first-row */}
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Employer Email</span>
                            <input type="text" name="email" placeholder="Employer Email" className="input input-bordered" />
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
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Deadline</span>
                            <input type="text" placeholder="Deadline" name="Deadline" className="input input-bordered" />
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
                <div className="flex gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Minimum price</span>
                            <input type="number" name="Minimum_price" placeholder="Minimum price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Maximum price</span>
                            <input type="number" placeholder="Maximum_price" name="Maximum price" className="input input-bordered" />
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