import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedBios: React.FC = () => {
    const typedRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        if (typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ['Hello my name is Rian', "I'm a learner, builder, and freedom seeker.", 'I love web development.', '  My first programming language I learned was JavaScript'],
                typeSpeed: 70,
                loop: true,
            });

            return () => {
                typed.destroy();
            };
        }
    }, []);

    return (
        <span className='text-lg text-gray-800 dark:text-gray-200' ref={typedRef} />
    );
};

export default TypedBios;
