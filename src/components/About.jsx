import React, { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

function About() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, amount: 0.2 });
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });
    
    // Parallax effect values
    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    
    const aboutContent = {
        heading: "About Me",
        sentences: [
            "I'm a front-end developer passionate about building responsive and visually engaging web applications.",
            "Skilled in HTML, CSS, JavaScript, and React.js, I specialize in clean code, dynamic animations, and modern tools like Tailwind CSS and Framer Motion.",
            "Always eager to learn, I stay updated with the latest trends in web development."
        ],
        highlights: ["front-end developer", "responsive", "visually engaging", "clean code", "dynamic animations", "React.js", "Tailwind CSS", "Framer Motion"]
    };

    // State for sentence hover
    const [hoveredSentenceIndex, setHoveredSentenceIndex] = useState(null);
    
    // Highlight words in sentences
    const highlightWords = (sentence) => {
        return aboutContent.highlights.reduce((acc, word) => {
            const regex = new RegExp(`(${word})`, 'gi');
            return acc.replace(regex, '<span class="text-blue-600 dark:text-blue-400 font-medium">$1</span>');
        }, sentence);
    };

    return (
        <section id="about" className="relative py-16 md:py-24 overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div 
                    className="absolute top-0 -right-20 w-72 h-72 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl"
                    style={{ y }}
                />
                <motion.div 
                    className="absolute bottom-20 -left-20 w-60 h-60 bg-purple-100/20 dark:bg-purple-900/10 rounded-full blur-3xl"
                    style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
                />
            </div>
            
            <motion.div 
                ref={containerRef}
                className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
            >
                <motion.div 
                    className="mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h2 
                        className="text-5xl sm:text-6xl md:text-7xl font-serif tracking-tight text-center bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent"
                    >
                        {aboutContent.heading}
                    </motion.h2>
                    <motion.div 
                        className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-4"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '5rem' } : {}}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    />
                </motion.div>

                {/* About Content */}
                <motion.div 
                    className="max-w-4xl mx-auto rounded-2xl p-1"
                    style={{ opacity }}
                >
                    <motion.div 
                        className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100 dark:border-gray-700"
                        initial={{ y: 50, opacity: 0 }}
                        animate={isInView ? { y: 0, opacity: 1 } : {}}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="space-y-6">
                            {aboutContent.sentences.map((sentence, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 + index * 0.1, duration: 0.7, ease: "easeOut" }}
                                >
                                    <motion.p
                                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-300 font-sans leading-relaxed sm:leading-relaxed cursor-default"
                                        onMouseEnter={() => setHoveredSentenceIndex(index)}
                                        onMouseLeave={() => setHoveredSentenceIndex(null)}
                                        animate={{
                                            scale: hoveredSentenceIndex === index ? 1.01 : 1,
                                            color: hoveredSentenceIndex === index ? 
                                                '#1f2937' : 'currentColor'
                                        }}
                                        transition={{ duration: 0.2 }}
                                        dangerouslySetInnerHTML={{ __html: highlightWords(sentence) }}
                                    />
                                </motion.div>
                            ))}
                            
                            {/* Skills visualization */}
                            <motion.div
                                className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700"
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                transition={{ delay: 0.6, duration: 0.7 }}
                            >
                                <h3 className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 font-medium mb-4">Core Competencies</h3>
                                <div className="flex flex-wrap gap-3">
                                    {['UI/UX', 'Responsive Design', 'React', 'JavaScript', 'Tailwind CSS', 'Animations', 'Modern Web', 'Performance'].map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium"
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: 0.1  }}
                                            whileHover={{ 
                                                scale: 1.05, 
                                                backgroundColor: '#3b82f6', 
                                                // color: '#ffffff',
                                                border: "1px solid black",
                                                transition: { duration: 0.2 }
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
                
            </motion.div>
        </section>
    );
}

export default About;