import { motion } from 'framer-motion';
import { useState } from 'react';

function About() {
    const text = "I'm a front-end developer passionate about building responsive and visually engaging web applications. Skilled in HTML, CSS, JavaScript, and React.js, I specialize in clean code, dynamic animations, and modern tools like Tailwind CSS and Framer Motion. Always eager to learn, I stay updated with the latest trends in web development";
    const sentences = text.split('. ');
    const [hoveredSentenceIndex, setHoveredSentenceIndex] = useState(null);

    return (
        <div>
            <div className='px-14 flex justify-center items-center'>
                <h1 className='text-[7vw] font-serif tracking-tight'>About Me</h1>
            </div>
            <div className="px-4 md:px-14">
                {sentences.map((sentence, index) => (
                    <motion.p
                        key={index}
                        initial={{ color: '#6b7280' }}
                        animate={{
                            color: hoveredSentenceIndex === index ? 'black' : '#6b7280',
                            textShadow: hoveredSentenceIndex === index ? '0px 0px 10px rgba(0, 0, 0, 0.4)' : '0px 0px 0px rgba(0, 0, 0, 0)'
                        }}
                        transition={{ duration: 0.2 }}
                        onMouseOver={() => setHoveredSentenceIndex(index)}
                        onMouseOut={() => setHoveredSentenceIndex(null)}
                        className="text-[2vw] md:text-2vw lg:text-3vw font-mono hover:cursor-pointer"
                    >
                        {sentence}.{' '}
                    </motion.p>
                ))}
            </div>
        </div>
    );
}

export default About;