

const Bannar = () => {
    return (
        <div className="hero h-[600px] w-full object-cover" style={{ backgroundImage: 'url(https://i.postimg.cc/RCQzS929/two-young-businessman-having-successful-meeting-restaurant.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl font-bold">Find The Career You Deserve It</h1>
                    <p className="mb-5">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit <br />
                     Provident cupiditate voluptatem et in. Quaerat fugiat ut .</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Bannar;