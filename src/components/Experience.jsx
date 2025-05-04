import React from 'react';
import ExperienceCard from './ExperienceCard';
import { motion } from 'framer-motion';

function Experience() {
    const experiences = [
        {
            name: "Binated",
            role: "Junior Software Engineer",
            duration: "March 2025 - Present",
            description: `Contributed to the development and maintenance of Binated.com and Binated.ai, focusing on building responsive user interfaces and seamless user experiences.
            Designed and implemented features for the client dashboard, ensuring functionality and performance across modern browsers.
            Created and maintained API documentation to support internal teams and external users.
            Participated in various ongoing frontend and backend projects, collaborating closely with cross-functional teams.`,
            skills: ["React.js", "Tailwind CSS v4", "JavaScript", "CSS", "HTML5"]
        },
        {
            name: "Ninad Web Tech",
            role: "Intern",
            duration: "Dec 2024 - March 2025",
            description: "Currently building responsive websites using HTML, CSS, and JavaScript, managing content with WordPress, and occasionally using Adobe Photoshop for design tasks.",
            skills: ["HTML", "CSS", "JavaScript", "Wordpress"]
        },
        {
            name: "TCR INNOVATION",
            role: "Intern",
            duration: "Jan 2022 - Jun 2022",
            description: "Assisted in implementing account management features and updating banking operations in a Java application, while researching ways to improve this performance and security.",
            skills: ["Java", "JavaGUI"]
        },
    ];

    return (
        <section className="experience-section py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="container mx-auto text-center mb-12 md:mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="inline-block text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight bg-gradient-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                        Experience
                    </h2>
                    <motion.div
                        className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
                        initial={{ width: 0 }}
                        whileInView={{ width: '6rem' }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                    />

                </motion.div>

                <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;