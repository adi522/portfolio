import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { DiMongodb } from "react-icons/di";

function Skill({ name, icon }) {
    return (
        <div className='flex justify-center border-black border-2 rounded-2xl w-full md:w-1/3 lg:w-1/3 xl:w-1/4 h-[25vh] hover:bg-slate-50 hover:scale-105 hover:shadow-xl'>
            <div className="flex flex-col items-center">
                <h1 className='font-mono font-light mt-2 text-5xl sm:text-4xl md:text-3xl lg:text-3xl '>{name}</h1>
                <span className='text-[10vw] sm:text-5xl md:text-4xl lg:text-[6vw] xl:text-[5vw]'>{icon}</span>
            </div>
        </div>
    );
}

function Skills() {
    const skills = [
        { name: 'React', icon: <IoLogoReact /> },
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'JavaScript', icon: <DiJavascript1 /> },
        { name: 'MongoDB', icon: <DiMongodb /> },
        { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
        { name: 'HTML', icon: <IoLogoHtml5 /> },
    ];

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="w-full sm:rounded-[3vw]">
                <div className='px-14 flex justify-center items-center'>
                    <h1 className='text-[7vw] font-serif tracking-tight'>Skills</h1>
                </div>
            </div>
            <div className='w-full flex flex-wrap justify-center gap-10 px-[5vw] mb-[2vw] lg:flex-nowrap'>
                {skills.slice(0, 3).map((skill) => (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
            <div className='w-full flex flex-wrap justify-center gap-10 px-[5vw] lg:flex-nowrap'>
                {skills.slice(3).map((skill) => (
                    <Skill key={skill.name} name={skill.name} icon={skill.icon} />
                ))}
            </div>
        </div>
    );
}

export default Skills;  