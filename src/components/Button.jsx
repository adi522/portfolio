import { motion } from 'framer-motion';
import React from 'react';

function Button({ links }) {

    return (
        <div className='flex justify-center gap-7'>
            {links.map((link, index) => (
                <motion.a
                    whileHover={{ rotate: "2.5deg", scale: 1.1, backgroundColor: "black" }}
                    transition={{ duration: 0.1 }}
                    key={index}
                    className='px-4 py-1 font-mono border-2 border-white bg-slate-800 rounded-full text-white hover:scale-95 transition-transform'
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {link.label}
                </motion.a>
            ))}
        </div>
    );
}

export default Button;
