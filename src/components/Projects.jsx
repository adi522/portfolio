import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Button from './Button';

function Projects() {
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            name: 'Movie_app_React',
            image: 'https://i.ibb.co/fx5TF4r/Movie-web-App.png',
            description: 'A dynamic movie web app built with React.js, showcasing detailed movie information such as cast, ratings, genres, and runtime. The app also provides personalized recommendations for an engaging user experience.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/Movie' },
                { label: 'Live', url: 'https://moviewebaditya1nagmal.netlify.app/' },
            ],
            skills: ["React", "Redux", "Javascript", "Tailwind CSS"]
        },
        {
            id: 2,
            name: 'Ochi.design Clone',
            image: 'https://i.postimg.cc/gkzZZcjr/ochi-design.png',
            description: 'Developed the user interface for the Ochi.design app clone using React and Tailwind CSS. Focused on building a dynamic design with clean, modern UI components and seamless user interactions.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/ochi.design' },
                { label: 'Live', url: 'https://ochi-design-sigma.vercel.app/' },
            ],
            skills: ["React", "Javascript", "Tailwind CSS"]
        },
        {
            id: 3,
            name: 'Refokus Clone',
            image: 'https://i.postimg.cc/dV2n6GXj/Refokus-Clone.png',
            description: 'Developed the user interface of the Refokus app clone using React and Tailwind CSS, focusing on building a responsive, dynamic design with clean, modern UI components and smooth user interactions.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/refokus-clone' },
                { label: 'Live', url: 'https://adi522.github.io/refokus-clone/' },
            ],
            skills: ["React", "Javascript", "Tailwind", "CSS"]
        },
        {
            id: 4,
            name: 'Product Management App',
            image: 'https://i.postimg.cc/zJq4MfjG/Product.png',
            description: 'Built a fully responsive e-commerce web app clone with cart functionality, product listing, and modern UI using React and Tailwind CSS.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/online-store' },
            ],
            skills: ["React", "Javascript", "Tailwind"]
        },
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            }
        }
    };

    const projectVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100
            }
        }
    };

    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: true, threshold: 0.5 });

    return (
        <div id="projects" className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
            <motion.div
                ref={titleRef}
                className="max-w-7xl mx-auto text-center mb-12 md:mb-20"
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: titleInView ? 1 : 0,
                    y: titleInView ? 0 : -20
                }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
                <h2 className="text-[10vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-serif tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent inline-block">
                    Projects
                </h2>
                <motion.div
                    className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-2"
                    initial={{ width: 0 }}
                    animate={{ width: titleInView ? "80px" : 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
                <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                    Check out some of my recent work
                </p>
            </motion.div>

            <motion.div
                className="max-w-7xl mx-auto"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
            >
                {projects.map((project, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <motion.div
                            key={project.id}
                            variants={projectVariants}
                            className={`relative mb-24 md:mb-40 group`}
                            onHoverStart={() => setHoveredProject(project.id)}
                            onHoverEnd={() => setHoveredProject(null)}
                        >
                            <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 md:gap-10 relative`}>
                                <motion.div
                                    className="w-full lg:w-3/5 relative z-10 overflow-hidden rounded-xl group-hover:shadow-2xl transition-shadow duration-500"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className="relative aspect-video overflow-hidden rounded-xl">
                                        <motion.img
                                            className="object-cover w-full h-full"
                                            src={project.image}
                                            alt={`${project.name} preview`}
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.5 }}
                                            loading="lazy"
                                        />
                                        <motion.div
                                            className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        />
                                    </div>

                                    <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.skills.map((skill, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 rounded-full text-xs font-medium text-blue-600 dark:text-blue-400 backdrop-blur-sm"
                                                initial={{ opacity: 0, y: 10 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 * idx }}
                                            >
                                                {skill}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    className={`w-full lg:w-2/5 ${isEven ? 'lg:pl-6' : 'lg:pr-6'} z-20`}
                                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <motion.h3
                                        className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold mb-4 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent tracking-tight"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {project.name}
                                    </motion.h3>

                                    <motion.p
                                        className="text-gray-700 dark:text-gray-300 mb-6 text-base md:text-lg"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {project.description}
                                    </motion.p>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-8">
                                        <div className="mt-2 sm:mt-0">
                                            <Button links={project.links} />
                                        </div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className={`absolute top-1/2 ${isEven ? 'right-0 -translate-y-1/4' : 'left-0 translate-y-1/4'} -z-10 hidden lg:block`}>
                                <motion.div
                                    className="w-64 h-64 rounded-full blur-3xl opacity-20 bg-blue-500 dark:bg-blue-600"
                                    animate={{
                                        scale: hoveredProject === project.id ? 1.3 : 1,
                                        opacity: hoveredProject === project.id ? 0.3 : 0.15,
                                    }}
                                    transition={{ duration: 1 }}
                                />
                            </div>

                            <motion.div
                                className={`absolute -z-10 text-[120px] sm:text-[180px] font-bold text-gray-100 dark:text-gray-800 ${isEven ? '-left-6 lg:-left-12' : '-right-6 lg:-right-12'} -top-10 opacity-60 select-none hidden sm:block`}
                                animate={{
                                    x: hoveredProject === project.id ? (isEven ? -10 : 10) : 0
                                }}
                                transition={{ duration: 0.5 }}
                            >
                                {String(project.id).padStart(2, '0')}
                            </motion.div>

                        </motion.div>
                    );
                })}
            </motion.div>


        </div>
    );
}

export default Projects;