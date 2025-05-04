import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaPhoneAlt, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function Footer() {
    const [activeIcon, setActiveIcon] = useState(null);
    const [copied, setCopied] = useState(false);

    const contactInfo = [
        {
            id: 'linkedin',
            icon: <FaLinkedin />,
            label: 'LinkedIn',
            url: 'https://linkedin.com/in/aditya-nagmal',
            color: 'bg-blue-600 text-white',
            gradient: 'from-blue-500 to-blue-700'
        },
        {
            id: 'email',
            icon: <BiLogoGmail />,
            label: 'Email',
            value: 'adityanagmal1244@gmail.com',
            action: (email) => {
                navigator.clipboard.writeText(email);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            },
            color: 'bg-blue-600 text-white',
            gradient: 'from-blue-500 to-blue-700'
        },
        {
            id: 'phone',
            icon: <FaPhoneAlt />,
            label: 'Phone',
            url: 'tel:+918856881244',
            value: '+91 8856881244',
            color: 'bg-green-500 text-white',
            gradient: 'from-green-500 to-green-600'
        },
        {
            id: 'github',
            icon: <FaGithub />,
            label: 'GitHub',
            url: 'https://github.com/adi522',
            color: 'bg-blue-600 text-white',
            gradient: 'from-blue-500 to-blue-700'
        },

    ];

    return (
        <footer id="footer" className="relative w-full py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-10 left-10 w-40 h-40 bg-blue-100/40 dark:bg-blue-900/10 rounded-full blur-3xl"></div>
                <div className="absolute top-10 right-10 w-60 h-60 bg-purple-100/30 dark:bg-purple-900/10 rounded-full blur-3xl"></div>
            </div>

            {/* Content container */}
            <div className="container mx-auto px-4">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-[10vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-serif tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                        Get In Touch
                    </h2>
                    <motion.div
                        className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-2"
                        initial={{ width: 0 }}
                        animate={{ width: '4rem' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                    <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                </motion.div>

                {/* Contacts container */}
                <div className="max-w-3xl mx-auto">
                    {/* Contact icons */}
                    <div className="relative flex justify-center mb-8">
                        <div className="flex items-center justify-center gap-2 sm:gap-4 px-6 py-4 rounded-full bg-white/80 dark:bg-gray-800/80 shadow-lg backdrop-blur-sm border border-gray-100 dark:border-gray-700">
                            {contactInfo.map((item, i) => (
                                <motion.div
                                    key={item.id}
                                    className="relative"
                                    onMouseEnter={() => setActiveIcon(item.id)}
                                    onMouseLeave={() => setActiveIcon(null)}
                                    whileHover={{ scale: 1.15 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {activeIcon === item.id && (
                                        <motion.div
                                            className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-2 py-1 rounded text-xs font-medium"
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                        >
                                            {item.label}
                                        </motion.div>
                                    )}

                                    <motion.a
                                        href={item.url}
                                        onClick={(e) => {
                                            if (item.action) {
                                                e.preventDefault();
                                                item.action(item.value);
                                            }
                                        }}
                                        target={item.url ? "_blank" : undefined}
                                        rel={item.url ? "noopener noreferrer" : undefined}
                                        className={`flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full text-xl sm:text-2xl text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white transition-colors duration-300`}
                                        aria-label={item.label}
                                    >
                                        {item.icon}
                                        <motion.span
                                            className={`absolute inset-0 rounded-full bg-gradient-to-r ${item.gradient} opacity-0`}
                                            animate={{
                                                opacity: activeIcon === item.id ? 0.2 : 0,
                                                scale: activeIcon === item.id ? [1, 1.2, 1] : 1
                                            }}
                                            transition={{ duration: 1, repeat: activeIcon === item.id ? Infinity : 0 }}
                                        />
                                    </motion.a>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Copied notification */}
                    <motion.div
                        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg z-50"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 50 }}
                        transition={{ duration: 0.3 }}
                    >
                        Email copied to clipboard!
                    </motion.div>

                    {/* Contact card */}
                    <motion.div
                        className="max-w-md mx-auto bg-white/90 dark:bg-gray-800/90 backdrop-blur-md rounded-xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <div className="p-6">
                            <div className="flex items-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold">
                                    AN
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Aditya Nagmal</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Frontend Developer</p>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 text-sm">
                                <a
                                    href="mailto:adityanagmal1244@gmail.com"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    📧 adityanagmal1244@gmail.com
                                </a>
                                <a
                                    href="tel:+918856881244"
                                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    📱 +91 8856881244
                                </a>
                                <p className="text-gray-600 dark:text-gray-300">
                                    🌐 Pune, Maharashtra, India
                                </p>
                            </div>

                            <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                                <a
                                    href="https://drive.google.com/file/d/1TS-PfK93501Feg1wAJaBB64QQSz9x999/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center rounded-md hover:shadow-lg transition-shadow duration-300"
                                >
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-16 text-center text-gray-500 dark:text-gray-400 text-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <p>© {new Date().getFullYear()} Aditya Nagmal. All rights reserved.</p>
                    <p className="mt-2">Built with React, Tailwind CSS, and Framer Motion</p>
                </motion.div>
            </div>
        </footer>
    );
}

export default Footer;