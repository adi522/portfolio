import React from 'react';

function ExperienceCard({ experience }) {
    return (
        <div className="experience-card relative p-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-2xl"></div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mt-2">{experience.name}</h2>
            <p className="text-lg sm:text-xl font-semibold text-blue-600">{experience.role}</p>
            <p className="text-sm sm:text-base text-gray-500 italic mb-4">{experience.duration}</p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4">{experience.description}</p>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Skills Used:</h3>
            <ul className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                    <li
                        key={index}
                        className="px-3 py-1 bg-blue-100 text-blue-800 text-sm sm:text-base rounded-full"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ExperienceCard;