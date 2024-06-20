import { Link, ScrollLink } from "react-scroll";
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";

const Header = () => {
    const navLinks = [
        { name: "Home", link: "home" },
        { name: "About me", link: "about" },
        { name: "Projects", link: "projects" },
        { name: "Contact", link: "contact" },
    ];

    const [open, setOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`w-full max-w-7xl bg-[#1a1a29] ${isSticky ? "fixed top-0 left-0 right-0 z-10" : ""}`}>
            <div className="md:flex items-center justify-between py-4 md:px-10 px-7">
                {/* Logo Section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <span className="text-primary hover:text-white">123</span>
                </div>

                {/* Mobile menu icons */}
                <div onClick={() => setOpen(!open)} className="w-7 h-7 right-8 top-6 cursor-pointer md:hidden text-white absolute">
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </div>

                {/* Nav Link Items */}
                <ul
                    className={`md:flex md:items-center md:pb-0 absolute md:static md:z-auto z-10 left-0 w-full md:w-auto mt-4 md:mt-0 md:pl-0 pl-9 bg-slate-400 sm:bg-transparent transition-all duration-500 ease-in cursor-pointer ${
                        open ? "top-12" : "top-[-490px]"
                    }`}
                >
                    {navLinks.map((link) => (
                        <li key={link.name} className="md:ml-8 md:my-0 my-7 font-semibold">
                            <Link
                                to={link.link}
                                activeClass="active"
                                smooth={true}
                                spy={true}
                                className="text-white transition-all duration-500 hover:text-primary"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Header;