import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const words = ["Hello", "Kamusta", "Shay Galiste 2024"];

export const opacity = {
    initial: {
        opacity: 0
    },
    enter: {
        opacity: 0.75,
        transition: { duration: 1, delay: 0.2 }
    },
};

export const slideUp = {
    initial: {
        top: 0
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }
    }
};

export default function Index() {
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const [loading, setLoading] = useState(true); // Add loading state

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    useEffect(() => {
        if (index === words.length - 1) {
            // Delay the preloader for 3 seconds before setting loading to false
            const timeoutId = setTimeout(() => {
                setLoading(false); // Set loading to false when loading is complete
            }, 3000);
            return () => clearTimeout(timeoutId);
        }
        const timeoutId = setTimeout(() => {
            setIndex(index + 1);
        }, index === 0 ? 1000 : 150);
        return () => clearTimeout(timeoutId);
    }, [index]);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height}  L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] }
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 }
        }
    };

    return (
        <motion.div 
            className="h-screen w-screen flex items-center justify-center fixed z-50 bg-gray-900"
            style={{ display: loading ? 'flex' : 'none' }} // Conditionally render based on loading state
        >
            {dimension.width > 0 &&
                <>
                    <motion.p className="flex items-center text-white text-4xl relative z-10" variants={opacity} initial="initial" animate="enter">
                        {words[index]} {/* Displaying the words directly */}
                    </motion.p>
                    <svg className="absolute top-0 w-full" style={{ height: `calc(100% + 300px)` }}>
                        <motion.path variants={curve} initial="initial" exit="exit" fill="#141516"></motion.path>
                    </svg>
                </>
            }
        </motion.div>
    );
}
