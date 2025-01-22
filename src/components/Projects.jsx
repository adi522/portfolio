import React from 'react';
import Button from './Button';

function Projects() {
    const projects = [
         {
            name: 'Movie_app_React',
            image: 'https://i.ibb.co/fx5TF4r/Movie-web-App.png',
            description: 'A responsive movie web app built with React.js and Tailwind CSS, featuring a search bar, detailed movie info, trailers, recommendations, and platform availability. Powered by Redux and the TMDB API for a seamless user experience.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/Movie_Webapp' },
                { label: 'Live', url: 'https://movie-webapp-gamma.vercel.app/' },
            ],
            skills: ["React", "Redux", "Javascript", "Tailwind CSS",]
        },
        {
            name: 'Ochi.design',
            image: 'https://i.postimg.cc/gkzZZcjr/ochi-design.png',
            description: 'Developed the user interface for the Ochi.design app clone using React and Tailwind CSS. Focused on building a dynamic design with clean, modern UI components and seamless user interactions.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/ochi.design' },
                { label: 'Live', url: 'https://ochi-design-sigma.vercel.app/' },
            ],
            skills: ["React", "Javascript", "Tailwind CSS",]
        },
        {
            name: 'Refokus Clone',
            image: 'https://i.postimg.cc/dV2n6GXj/Refokus-Clone.png',
            description: 'Developed the user interface of the Refokus app clone using React and Tailwind CSS, focusing  on building a responsive, dynamic design with clean, modern UI components and smooth user interactions.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/refokus-clone' },
                { label: 'Live', url: 'https://adi522.github.io/refokus-clone/' },
            ],
            skills: ["React", "Javascript", "Tailwind", "CSS"]
        },
        {
            name: 'Product Management App',
            image: 'https://i.postimg.cc/zJq4MfjG/Product.png',
            description: 'Built a fully responsive e-commerce web app clone with cart functionality, product listing, and modern UI using React and Tailwind CSS.',
            links: [
                { label: 'Github', url: 'https://github.com/adi522/online-store' },
            ],
            skills: ["React", "Javascript", "Tailwind"]
        },
    ];

    return (
        <div className=''>
            <div className="w-full sm:rounded-[3vw]">
                <div className='px-14 flex justify-center items-center'>
                    <h1 className='text-[7vw] font-serif tracking-tight'>Projects</h1>
                </div>
            </div>
            {projects.map((project, index) => (
                <div key={index} className='clones w-full flex flex-col lg:flex-row gap-10 px-14 mb-20'>
                    <img
                        className='rounded-2xl bg-cover w-full lg:w-1/2'
                        src={project.image}
                        alt={`${project.name} preview`}
                    />
                    <div className='w-full lg:w-1/2 flex flex-col'>
                        <h1 className={`proName text-[4vw] font-serif font-semibold ${index === 2 ? 'text-[3vw] leading-[4.5vw]' : ''}`}>
                            {project.name}
                        </h1>
                        <p className='pb-4'>
                            <span className='font-semibold'>Description:</span> {project.description}
                        </p>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold '>Skills Used:</h1>
                            <ul>
                                {project.skills.map((item, index) => (
                                    <li key={index} className='skill-item pl-4'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <Button links={project.links} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Projects;
