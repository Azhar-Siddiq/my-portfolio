import React, { useState } from 'react';

const About = () => {
    const [showFullText, setShowFullText] = useState(false);
    const fullText = "I'm currently working as a UI/UX Designer at EnableU. Previously, I had an experience as a Graphic Designer at Vectored Creations. I had availed freelancing opportunities from different platforms including Fiverr & Upwork as well. Throughout my career, I have had the opportunity to work with diverse teams, understand client requirements, and deliver innovative solutions. I am proficient in using industry-standard design tools and keep myself updated with the latest design trends and technologies. I believe in having experience in each source of designing and I enhanced my skills using tools such as Adobe Photoshop, Adobe illustrator, Figma, Canva etc. Feel free to get in touch with me. I'm always available for opportunities and creative ideas. I believe in having experience in each source of designing and I enhanced my skills using tools such as Adobe Photoshop, Adobe illustrator, Figma, Canva etc. Feel free to get in touch with me. I'm always available for opportunities and creative ideas.";
    const truncatedText = fullText.slice(0, 150) + "...";

    const toggleText = () => {
        setShowFullText(!showFullText);
    };
    
    const skills = [
        {
            name: "UI & UX DESIGNING",
            image: "/src/assets/ruler-pen.png"
        },
        {
            name: "WEB DEVELOPMENT",
            image: "/src/assets/code.png"
        },
        {
            name: "MOBILE DEVELOPMENT",
            image: "/src/assets/android.png"
        },
        {
            name: "RESPONSIVE DESIGNING",
            image: "/src/assets/mobile.png"
        },
    ];

    return (
        <div className="px-7 md:px-10 sm:-mt-24 pt-10" id="about">
            <h1 className="text-3xl mt-5 text-primary font-semibold">About me</h1>
            <p className="text-white my-2 md:w-2/3 leading-[2]">
                {showFullText ? fullText : truncatedText}
                <button
                    className="text-blue-500 hover:text-blue-700 ml-2"
                    onClick={toggleText}
                >
                    {showFullText ? "See Less" : "See More"}
                </button>
            </p>

            {/* experience */}
            <div className="md:flex items-center my-7">
                <p className="text-primary text-8xl font-bold">3+</p>
                <p className="text-white text-2xl md:ml-5">
                    Years of experience. Specialized in web designing, while the process of strategizing and creating an online user experience that will connect with your target audience.
                </p>
            </div>

            {/* skill cards */}
            <div className='flex flex-col md:flex-row'>
                {
                    skills.map((skill, index) => <div key={index} className='skills md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end my-3 md:m-3 p-5 shadow-sm transition-all duration-500'>
                        <img src={skill.image} alt="" />
                        <p className='text-2xl mt-3 text-white font-semibold'>{skill.name}</p>
                    </div>)
                }
            </div>

            {/* services card */}
            <div></div>
        </div>
    );
};

export default About;