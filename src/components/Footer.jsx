import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div id="footer" className="w-full h-[20vh] flex justify-center items-center">
            <div className="container mx-auto p-4 flex justify-center items-center">
                <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white h-[8vh] flex justify-center items-center rounded-full">
                    <div className="w-full flex items-center justify-evenly mx-2 text-3xl">
                        <a href="https://linkedin.com/in/aditya-nagmal" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><FaLinkedin /></a>
                        <a href="mailto:adityanagmal1244@gmail.com" className="text-gray-600 hover:text-gray-900"><BiLogoGmail /></a>
                        <a href="tel:+918856881244" className="text-gray-600 hover:text-gray-900"><FaPhoneAlt /></a>
                        <a href="https://github.com/adi522" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900"><FaGithub /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Footer;