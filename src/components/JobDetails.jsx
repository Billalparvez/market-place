import moment from "moment";
import { useLoaderData, useParams } from "react-router";


const JobDetails = () => {
    const { id } = useParams()
    const data = useLoaderData()
    console.log(data,id)

    return (
        <div className="max-w-7xl mx-auto">
            <p className="text-center text-3xl font-bold my-5">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className="card card-compact   ">
                <div className="card-body">
                    <div className="px-4 rounded-2xl md:rounded-full border-2 p-10 border-[#63B916]  ">
                        <div className="flex flex-col md:flex-row gap-5 justify-around">
                            <div>
                                <h2 className="card-title text-2xl ">Name: <span className="text-[#63B916]">{data.Job_Title}</span></h2>
                                <h2 className="font-bold text-2xl"><span className="text-[#63B916]">Deadline:</span> {data.Deadline}</h2>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">Maximum_price:<span className="text-[#63B916]"> $ </span>{data.Maximum_price}</p>
                                <p className="text-2xl font-bold"> Minimum_price:<span className="text-[#63B916]"> $ </span>{data.Minimum_price}</p>
                            </div>
                        </div>
                        <p className="text-2xl text-center"><span className="border-b-2 font-bold border-green-500 text-[#63B916]">Description </span> <br /> {data.Description}</p>
                    </div>

                </div>
            </div>

            <p className=" md:text-3xl font-bold text-[#63B916] my-7">Bid Form Section</p>
            {/* addJOb Form */}
            <form onSubmit={''} className="space-y-3 max-w-7xl mx-auto my-10">

                {/* first-row */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">User_Email</span>
                            <input type="text" name="user_Email" placeholder="User Email" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold"> Owner_Email</span>
                            <input type="text" name="owner_Email" placeholder="Owner Email" className="input input-bordered" />
                        </label>
                    </div>
                </div>
                {/* second-row  */}
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="form-control w-full">
                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Deadline</span>
                            <input type="text" placeholder="Deadline" name="Deadline" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control w-full">

                        <label className="input-group input-group-vertical">
                            <span className="bg-[#63B916] text-white font-bold">Price</span>
                            <input type="number" placeholder="Price" name="price" className="input input-bordered" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Bid on the project" className=" bg-gradient-to-r btn w-full to-[#63B916] text-white  from-indigo-500  " />
            </form>
            {/* form */}

        </div>
    );
};

export default JobDetails;