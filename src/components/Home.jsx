import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { FiArrowDown, FiDownload } from "react-icons/fi";

function Home() {
    const name = "frontend-developer";
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState(
        typeof window !== "undefined" ? window.innerWidth : 0
    );

    const { scrollY } = useScroll();
    const heroRef = useRef(null);
    const textOpacity = useTransform(scrollY, [0, 300], [1, 0]);
    const textY = useTransform(scrollY, [0, 300], [0, -100]);

    // Interactive background effect
    const mouseX = useMotionValue(
        typeof window !== "undefined" ? window.innerWidth / 2 : 0
    );
    const mouseY = useMotionValue(
        typeof window !== "undefined" ? window.innerHeight / 2 : 0
    );

    const gradientX = useTransform(
        mouseX,
        [0, typeof window !== "undefined" ? window.innerWidth : 1000],
        [0, 100]
    );

    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, [mouseX, mouseY]);

    // Determine number of particles based on screen size
    const getParticleCount = () => {
        if (windowWidth < 640) return 8; // mobile
        if (windowWidth < 1024) return 12; // tablet
        return 20; // desktop
    };

    // Letter animations for staggered entrance
    const letterVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        }),
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.06,
                delayChildren: 0.3,
            },
        },
    };

    return (
        <div className="relative w-full h-full p-2 xs:p-3 sm:p-4 overflow-hidden">
            {Array.from({ length: getParticleCount() }).map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-blue-400/20"
                    initial={{
                        x: Math.random() * (windowWidth || 100),
                        y:
                            Math.random() *
                            (typeof window !== "undefined" ? window.innerHeight : 100),
                    }}
                    animate={{
                        x: [
                            Math.random() * (windowWidth || 100),
                            Math.random() * (windowWidth || 100),
                            Math.random() * (windowWidth || 100),
                        ],
                        y: [
                            Math.random() *
                            (typeof window !== "undefined" ? window.innerHeight : 100),
                            Math.random() *
                            (typeof window !== "undefined" ? window.innerHeight : 100),
                            Math.random() *
                            (typeof window !== "undefined" ? window.innerHeight : 100),
                        ],
                    }}
                    transition={{
                        duration: 10 + Math.random() * 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        scale: 0.5 + Math.random(),
                        opacity: 0.2 + Math.random() * 0.5,
                    }}
                />
            ))}

            {windowWidth > 768 && (
                <motion.div
                    className="pointer-events-none fixed inset-0 opacity-20 z-0 hidden md:block"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
              rgba(56, 189, 248, 0.5) 0%, 
              rgba(0, 0, 0, 0) 60%)`,
                    }}
                />
            )}

            <motion.div
                ref={heroRef}
                style={{
                    background: `linear-gradient(${gradientX}deg, #060606, #909090)`,
                    boxShadow: "0 0 50px rgba(0, 0, 0, 0.2)",
                }}
                className="w-full h-[80vh] xs:h-[85vh] sm:h-[90vh] md:h-[85vh] lg:h-[95vh] rounded-[10px] xs:rounded-[15px] sm:rounded-[20px] md:rounded-[3vw] relative overflow-hidden transition-all duration-700"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-5" />

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-20" />

                <div className="Nav text-white py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 px-4 xs:px-6 sm:px-10 md:px-16 lg:px-20 flex items-center justify-between relative z-10">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="w-8 h-8 xs:w-10 xs:h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 bg-[#DEDEDE] rounded-full flex items-center justify-center cursor-pointer group"
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                        <motion.div
                            className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 bg-black rounded-full flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300"
                            whileHover={{ scale: 1.2 }}
                        >
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                                className="text-[6px] xs:text-[8px] sm:text-[10px] md:text-xs text-white font-mono"
                            >
                                AN
                            </motion.span>
                        </motion.div>
                    </motion.div>

                    <div className="flex flex-col xs:flex-row gap-2 xs:gap-3">
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "black" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white bg-slate-700 px-2 xs:px-3 sm:px-4 md:px-5 py-1 rounded-full font-mono group relative overflow-hidden"
                            onClick={() =>
                                document
                                    .getElementById("footer")
                                    .scrollIntoView({ behavior: "smooth" })
                            }
                        >
                            <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                                Contact Me
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="hidden xs:inline-block"
                                >
                                    <FiArrowDown size={windowWidth < 640 ? 12 : 16} />
                                </motion.span>
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ zIndex: 0 }}
                            />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "black" }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl border-2 border-white bg-slate-700 px-2 xs:px-3 sm:px-4 md:px-5 py-1 rounded-full font-mono group relative overflow-hidden"
                            onClick={() =>
                                window.open(
                                    "https://drive.google.com/file/d/1TS-PfK93501Feg1wAJaBB64QQSz9x999/view?usp=sharing",
                                    "_blank"
                                )
                            }
                        >
                            <span className="relative z-10 flex items-center justify-center gap-1 md:gap-2">
                                Resume
                                <motion.span
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="hidden xs:inline-block"
                                >
                                    <FiDownload size={windowWidth < 640 ? 12 : 16} />
                                </motion.span>
                            </span>
                            <motion.span
                                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{ zIndex: 0 }}
                            />
                        </motion.button>
                    </div>
                </div>

                <motion.div
                    className="tilt-text pt-[6vh] xs:pt-[7vh] sm:pt-[8vh] md:pt-[10vh] lg:pt-[12vh] px-4 xs:px-6 sm:px-10 md:px-14 relative z-10"
                    style={{
                        opacity: textOpacity,
                        y: textY,
                    }}
                >
                    <motion.h1
                        className="text-black uppercase text-[5vw] xs:text-[4.5vw] sm:text-[4vw] md:text-[3vw] lg:text-[2vw] font-bold leading-snug xs:leading-relaxed sm:leading-loose md:leading-loose"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative"
                        >
                            I am a <br />
                        </motion.span>

                        <motion.div
                            className="font-serif text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold block my-1 xs:my-2 select-none"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {name.split("").map((elem, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block"
                                    variants={letterVariants}
                                    custom={index}
                                >
                                    {elem === "-" ? (
                                        <span className="inline-block mx-[0.1em] xs:mx-[0.2em] sm:mx-[0.3em] md:mx-1 lg:mx-2">
                                            {elem}
                                        </span>
                                    ) : (
                                        elem
                                    )}
                                </motion.span>
                            ))}
                            <motion.span
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    delay: 1,
                                    duration: 0.8,
                                    ease: [0.22, 1, 0.36, 1],
                                }}
                                className="block h-[2px] sm:h-[3px] bg-gradient-to-r from-blue-500 to-purple-500 mt-1 xs:mt-2 w-full"
                            />
                        </motion.div>

                        <motion.div className="">
                            <motion.span
                                className="tracking-tight text-black bg-clip-text text-transparent inline-block text-[4.5vw] xs:text-[4vw] sm:text-[3.5vw] md:text-[2.5vw] lg:text-[2vw]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.6 }}
                            >
                                looking for
                            </motion.span>

                            <motion.span
                                className="block text-[6vw] xs:text-[5.5vw] sm:text-[5vw] md:text-[3.5vw] lg:text-[2.5vw] font-bold"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                <span className="bg-clip-text text-black">
                                    innovative projects
                                </span>{" "}
                                <span className="whitespace-nowrap">to work on.</span>
                            </motion.span>
                        </motion.div>
                    </motion.h1>
                </motion.div>

                <motion.div
                    className="absolute bottom-0 left-0 right-0 border-t-[1px] border-zinc-500"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                >
                    <div className="py-3 xs:py-4 sm:py-6 md:py-8 lg:py-10 px-4 xs:px-6 sm:px-10 md:px-14 lg:px-20 backdrop-blur-sm bg-black/10">
                        <div className="flex flex-col xs:flex-row items-center justify-between">
                            <div className="flex flex-col xs:flex-row gap-1 xs:gap-2 items-center">
                                <h1 className="text-white uppercase font-bold text-xs sm:text-sm md:text-base">
                                    Aditya Nagmal
                                </h1>
                                <h1 className="text-white uppercase font-bold hidden xs:block">
                                    |
                                </h1>
                                <h1 className="text-white uppercase font-bold text-xs sm:text-sm md:text-base relative group">
                                    Frontend-Developer
                                    <motion.div
                                        className="absolute -bottom-1 left-0 h-[2px] bg-blue-500"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 1.5 }}
                                    />
                                </h1>
                            </div>

                        </div>
                    </div>
                </motion.div>

                {windowWidth > 768 && (
                    <motion.div
                        className="hidden md:block absolute w-20 h-20 pointer-events-none mix-blend-difference z-50"
                        style={{
                            x: mouseX,
                            y: mouseY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                        animate={{
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <div className="w-full h-full rounded-full border border-white opacity-20" />
                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default Home;
