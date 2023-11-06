import { Link } from "react-router-dom";
import './Extra1.css'
const Extra1 = () => {
    return (
        <div className="md:my-10">
            <div className="text-center space-y-3 mb-9">
                <h1  data-aos="fade-left" className="text-3xl font-bold ">Kind Words From Our <br /> Happy <span className="text-[#63B916]">Candidates</span></h1>
                <p  data-aos="fade-down">Aperiam the eaque ipsa quae abillo was inventore veritatis keret quasi aperiam architecto <br />
                    beatae  explicabo. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            {/* <!-- Swiper --> */}
            <swiper-container className="mySwiper " pagination="true" pagination-clickable="true" space-between="30"
                centered-slides="true" autoplay-delay="2500" autoplay-disable-on-interaction="false">
                {/* single-pages */}
                <swiper-slide>
                    <div className="grid grid-cols-1 md:grid-cols-3 my-10  gap-3">
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className=" rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                {/* single-pages */}
                <swiper-slide>
                    <div className="grid grid-cols-1 md:grid-cols-3 my-10  gap-3">
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                {/* single-pages */}
                <swiper-slide>
                    <div className="grid grid-cols-1 md:grid-cols-3 my-10  gap-3">
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                        {/* single-card */}
                        <div className="card bg-base-500  border-2 rounded-3xl">
                            <figure className="px-10 pt-10">
                                <img src="https://i.postimg.cc/CLzGj6nx/3.jpg" alt="Shoes" className="rounded-full w-32 h-32 md:w-40 md:h-40 lg:w-64 lg:h-64 border-2 border-solid border-shadow-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title hover:text-[#63B916]">Alex Smite!</h2>
                                <p className="font-bold text-gray-400">Font-End-Developer</p>
                                {/* rating */}
                                <div className="rating rating-md rating-half">
                                    <input type="radio" name="rating-10" className="rating-hidden" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" checked />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-1" />
                                    <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-2" />
                                </div>
                                <progress className="progress progress-success w-56 h-0.5 my-5" value="100" max="100"></progress>
                                <div className="grid grid-flow-col gap-4">
                                    <Link to={'/product'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link>
                                    <Link to={'/services'}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current hover:bg-[#63B916] hover:text-white  border-2 border-solid p-1 rounded-full text-gray-400 "><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link>
                                    <Link to={'/about'}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="26" viewBox="0 0 24 24"
                                        className="border-2 border-solid p-1 fill-current text-gray-400 hover:bg-[#63B916] hover:text-white  rounded-full "><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>








                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span></span>
                </div>
            </swiper-container>
        </div>
    );
};

export default Extra1;