

const Bannar = () => {
    return (
        <div className="hero h-[650px] w-full object-cover" style={{ backgroundImage: 'url(https://i.postimg.cc/RCQzS929/two-young-businessman-having-successful-meeting-restaurant.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold" data-aos="fade-down " >Find The Career You Deserve It</h1>
                    <p className="mb-5" data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit <br />
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut .</p>
                    {/* input */}
                    <div data-aos="zoom-in-right" className="flex-col md:flex-row lg:flex  gap-5">
                        <label className="font-bold input-group flex-col md:flex-row border-2 border-solid">
                            <input type="text" placeholder="Job Title" className=" input input-bordered hidden md:inline-block bg-transparent" />
                            <input type="text" placeholder="City,State Or ZipCode" className=" border-x-3 border-gray-400 input input-bordered   bg-transparent" />
                            {/* <input type="text" placeholder="mohammad" className="input  bg-transparent" />
                             */}
                            <div className="form-control">
                                <div className="input-group  hidden md:inline-block">
                                    <select className="select select-bordered bg-transparent ">
                                        <option disabled selected>Selected category</option>
                                        <option>Degital Marketing</option>
                                        <option>Girphic desing</option>
                                        <option>Web-Desing</option>
                                    </select>

                                </div>
                            </div>
                        </label>
                        <button  className="btn bg-[#63B916] border-none text-white mt-5 lg:mt-0">Search</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Bannar;