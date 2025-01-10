import React from 'react';

function ExperienceCard({ experience }) {
    return (
        <div className="experience-card p-4 md:p-6 lg:p-8 m-4 md:m-6 lg:m-8 bg-white rounded-xl shadow-md">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold font-serif">{experience.name} | {experience.role}</h2>
            <p className="text-lg md:text-xl lg:text-2xl font-medium font-mono italic">{experience.duration}</p>
            <p className="text-lg md:text-xl lg:text-2xl font-mono">{experience.description}</p>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold">Skills Used:</h1>

            <ul className="text-lg md:text-xl lg:text-2xl font-mono" style={{ listStyleType: 'square', paddingLeft: '20px' }}>
                {experience.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;