import React from 'react';
import { motion } from 'framer-motion';
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

// Individual skill card component with animations
function SkillCard({ name, icon, index }) {
    // Custom color mapping for each skill type
    const getSkillColor = (skillName) => {
        const colors = {
            'React': 'from-cyan-500 to-blue-500 shadow-cyan-200',
            'Node.js': 'from-green-500 to-emerald-600 shadow-green-200',
            'JavaScript': 'from-yellow-400 to-amber-500 shadow-yellow-200',
            'MongoDB': 'from-green-600 to-green-800 shadow-green-200',
            'Tailwind CSS': 'from-cyan-400 to-sky-500 shadow-cyan-200',
            'HTML': 'from-orange-500 to-red-600 shadow-orange-200',
        };
        return colors[skillName] || 'from-slate-500 to-gray-700';
    };

    const iconColors = {
        'React': 'text-cyan-500',
        'Node.js': 'text-green-500',
        'JavaScript': 'text-yellow-500',
        'MongoDB': 'text-green-600',
        'Tailwind CSS': 'text-sky-500',
        'HTML': 'text-orange-500',
    };

    return (
        <motion.div
            className={`relative flex flex-col items-center justify-center w-full  rounded-2xl overflow-hidden 
                        bg-white dark:bg-gray-800 p-6 aspect-square md:aspect-auto md:h-[220px] lg:h-[250px] 
                        hover:shadow-xl transition-all duration-300`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                    type: 'spring', 
                    stiffness: 100, 
                    damping: 15, 
                    delay: index * 0.1 
                }
            }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ 
                y: -10,
                transition: { 
                    type: 'spring', 
                    stiffness: 300, 
                    damping: 15 
                }
            }}
        >
            <div className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${getSkillColor(name)}`}></div>
            
            <motion.div 
                className={`absolute -bottom-10 left-0 right-0 mx-auto w-48 h-48 rounded-full opacity-10 bg-gradient-to-tr ${getSkillColor(name)}`}
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }}
            />

            <motion.div
                className="flex flex-col items-center justify-center text-center z-10"
                initial={{ scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
                <motion.div 
                    className={`${iconColors[name]} text-6xl sm:text-5xl md:text-6xl lg:text-7xl mb-4`}
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
                >
                    {icon}
                </motion.div>
                <motion.h3 
                    className="font-sans text-lg sm:text-xl lg:text-2xl font-medium text-gray-800 dark:text-gray-100"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    {name}
                </motion.h3>
                
                <div className="mt-3 w-32 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div 
                        className={`h-full bg-gradient-to-r ${getSkillColor(name)}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                    />
                </div>
            </motion.div>
        </motion.div>
    );
}

function Skills() {
    const skills = [
        { name: 'React', icon: <IoLogoReact />, proficiency: 90 },
        { name: 'Node.js', icon: <FaNode />, proficiency: 85 },
        { name: 'JavaScript', icon: <DiJavascript1 />, proficiency: 95 },
        { name: 'MongoDB', icon: <DiMongodb />, proficiency: 80 },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill />, proficiency: 90 },
        { name: 'HTML', icon: <IoLogoHtml5 />, proficiency: 95 },
    ];

    return (
        <section id="skills" className="pb-20 px-4 sm:px-8 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            {/* Section header */}
            <motion.div 
                className="container mx-auto text-center mb-12 md:mb-16"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <h2 className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                    Technical Skills
                </h2>
                <motion.div 
                    className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
                    initial={{ width: 0 }}
                    whileInView={{ width: '6rem' }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    viewport={{ once: true }}
                />
                <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    My professional toolkit includes these technologies that I leverage to build modern web applications.
                </p>
            </motion.div>

            {/* Skills grid layout */}
            <motion.div 
                className="container mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {skills.map((skill, index) => (
                        <SkillCard 
                            key={skill.name} 
                            name={skill.name} 
                            icon={skill.icon} 
                            index={index} 
                        />
                    ))}
                </div>
            </motion.div>

            {/* Additional section for skill categories */}
            <motion.div 
                className="container mx-auto mt-16 md:mt-24"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.7 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col md:flex-row justify-around items-center gap-8 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
                    {[
                        { title: 'Frontend', count: 3, icon: "🎨" },
                        { title: 'Backend', count: 2, icon: "⚙️" },
                        { title: 'Database', count: 1, icon: "🗄️" }
                    ].map((category, index) => (
                        <motion.div 
                            key={category.title}
                            className="flex flex-col items-center text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="text-4xl mb-3">{category.icon}</div>
                            <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100">{category.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{category.count} technologies</p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

        </section>
    );
}

export default Skills;
