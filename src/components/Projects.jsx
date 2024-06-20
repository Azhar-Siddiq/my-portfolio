

const Projects = () => {
    const projects = [
        {
            tittle: "TWINDER",
            description: "A live geolocation app for finding tweets and twitter users around you.",
            photo: "../../public/assets/img1.png"
        },
        {
            tittle: "LIVENTS",
            description: "A video streaming app with live Geaolocation, for streaming events.",
            photo: "../../public/assets/img2.png"
        },
        {
            tittle: "MOOVE",
            description: "Mobile app for booking instant pickup & dropoff acrross major cities.",
            photo: "../../public/assets/img3.png"
        },
    ]
    return (
        <div className="px-7 md:px-10 my-8" id="projects">
            <h1 className="text-3xl mt-5 text-primary font-semibold">Featured projects:</h1>
            <p className="text-white my-2 md:w-2/3 leading-[2]">I have worked on many projects over the course of being a Web Developer, here are a few of my live projects.</p>

            {/* feature projects */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 my-6 items-center justify-center">
                {
                    projects.map((project, index) => <div key={index} className="flex flex-col shadow-sm md:w-[343px] bg-[#31313f] rounded p-4">
                        <a href={project.photo} className="mb-4">
                            <img src={project.photo} alt="" />
                        </a>
                        <h3 className="text-primary font-semibold text-lg">{project.tittle}</h3>
                        <p className="text-white mt-1">{project.description}</p>

                        {/* buttons */}
                        <div className='mt-5 flex items-center justify-between'>
                            <button className='btn bg-primary py-2 px-4 text-white rounded hover:bg-white hover:text-primary transition-all duration-500'>About me</button>
                            <button className='btn outline px-9 py-1.5 rounded border-none text-white ml-5 transition-all duration-500'>Projects</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Projects;