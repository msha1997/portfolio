import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t-2 py-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center md:justify-between">
                    {/* Social icons */}
                    <div className="py-2 flex justify-center md:justify-start space-x-4 text-gray-600 text-xl">
                        <Link
                            href="https://www.linkedin.com/in/mohammad-shafiei1/"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="py-2 text-center md:text-end w-full md:w-auto text-gray-600">
                        <p className="m-0">
                            &copy; {currentYear} All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
