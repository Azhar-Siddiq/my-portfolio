import facebook from "../../public/assets/facebook.png";
import instagram from "../../public/assets/instagram.png";
import dribble from "../../public/assets/dribbble.png";
import email from "../../public/assets/sms.png";

const Contact = () => {
    return (
        <div className="px-7 md:px-10 my-10" id="contact">
            <div className="flex flex-col md:flex-row">
                {/* text and icons */}
                <div className="md:w-1/2">
                    <h1 className="text-3xl mt-16 text-primary font-semibold">Connect with me:</h1>
                    <p className="text-white my-2 md:w-2/3 leading-[2]">Satisfied with me? Please contact me</p>

                    {/* social icons */}
                    <div className="flex">
                        <a href=""><img src={facebook} alt="" /></a>
                        <a href="" className="ml-4"><img src={instagram} alt="" /></a>
                        <a href="" className="ml-4"><img src={dribble} alt="" /></a>
                        <a href="" className="ml-4"><img src={email} alt="" /></a>
                    </div>
                </div>

                {/* form */}
                <div className="md:w-1/2">
                    <p className="mt-16 text-white text-2xl mb-6">Contact me, lets make magic together</p>
                    <form>
                        <input type="text" name="name" id="name" placeholder="Name: " className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded"/>
                        <input type="email" name="email" id="email" placeholder="Your Email: " className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded my-3"/>

                        <textarea name="message" id="message" placeholder="Message: " className="bg-[#F5F5F5] bg-opacity-10 py-3 px-3 md:w-3/4 w-full rounded mb-1"></textarea>

                        <button className="btn bg-primary py-2 px-12 text-white hover:bg-white hover:text-primary block transition-all duration-500 rounded">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;