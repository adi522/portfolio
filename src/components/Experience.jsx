import React from 'react';
import ExperienceCard from './ExperienceCard';

function Experience() {
    const experiences = [
        {
            name: "Ninad Web Tech",
            role: "Intern",
            duration: "Dec 2024 - Current",
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
        <div className="experience-section">
            <div className='px-14 flex justify-center items-center'>
                <h1 className='text-[7vw] font-serif tracking-tight'>Experience</h1>
            </div>
            <div className="w-full experience-container flex flex-col items-center justify-center md:flex-row">
                <div className="w-full md:w-1/2">
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;