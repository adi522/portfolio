import { easeIn, motion } from "framer-motion";
import React from "react";

function Home() {
    const name = "frontend-developer";
    return (
        <div className="w-full h-full p-2 sm:p-4">
            <div className="w-full sm:h-[60vh] md:h-[85vh] lg:h-[95vh] bg-gradient-to-r from-[#060606] to-[#909090] rounded-[20px] sm:rounded-[3vw]">
                <div className="Nav text-white py-4 px-6 sm:py-10 sm:px-20 flex items-center justify-between">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-[#DEDEDE] rounded-full flex items-center justify-center">
                        <div className="w-5 h-5 sm:w-7 sm:h-7 bg-black rounded-full flex items-center justify-center ">
                        </div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <motion.button
                                whileHover={{ rotate: "2.5deg", backgroundColor: "black" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="text-base sm:text-xl border-2 border-white bg-slate-700 px-3 sm:px-5 py-1 rounded-full font-mono"
                                onClick={() => document.getElementById("footer").scrollIntoView({ behavior: "smooth" })}
                            >
                                Contact Me
                            </motion.button>
                        </div>
                        <div>
                            <motion.button
                                whileHover={{ rotate: "-2.5deg", backgroundColor: "black" }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.1 }}
                                className="text-base sm:text-xl border-2 border-white bg-slate-700 px-3 sm:px-5 py-1 rounded-full font-mono"
                                onClick={() => window.open("https://drive.google.com/file/d/1OwjYLI9-e8PvqTuKj9wWiARymcH6_V3W/view?usp=sharing", "_blank")}
                            >
                                Download Resume
                            </motion.button>
                        </div>
                    </div>
                </div>

                <motion.div className="tilt-text pt-[8vh] sm:pt-[12vh] px-6 sm:px-14">
                    <h1 className="text-white uppercase text-[4vw] sm:text-[2vw] font-bold leading-relaxed sm:leading-10">
                        I am a <br />
                        <motion.span className="font-serif text-2xl sm:text-5xl font-semibold block my-2 select-none hover:cursor-default">
                            {name.split('').map((elem, index) => (
                                <motion.h1
                                    whileHover={{ rotate: "180deg" }}
                                    className="inline-block" key={index}>{elem}
                                </motion.h1>
                            ))}
                        </motion.span>
                        <span className="tracking-tight block">
                            looking for
                        </span>
                        <span className="block">innovative projects to work on.</span>
                    </h1>
                </motion.div>

                <div className="border-t-[1px] border-zinc-500 mt-10 sm:mt-20">
                    <div className="mt-6 sm:mt-10">
                        <div className="px-6 sm:px-14 flex flex-col sm:flex-row gap-2">
                            <h1 className="text-white uppercase font-bold text-sm sm:text-base">Aditya Nagmal</h1>
                            <h1 className="text-white uppercase font-bold hidden sm:block">|</h1>
                            <h1 className="text-white uppercase font-bold text-sm sm:text-base">Frontend-Developer</h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;
