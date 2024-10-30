const Banner = () => {
    return (
        <div 
            className="h-72 w-full mt-[60px] lg:mt-[200px] md:mt-[100px] relative bg-cover bg-center rounded-2xl" 
            style={{ backgroundImage: "url('https://i.ibb.co/LSqqQGq/danielle-cerullo-CQf-Nt66tt-ZM-unsplash.jpg')" }}
        >
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50 rounded-2xl"> 
                <h1 className="text-white text-2xl md:text-4xl lg:text-5xl font-bold">
                    Transform Your Body, Elevate Your Mind
                </h1>
            </div>
        </div>
    );
};

export default Banner;
