import { motion } from 'framer-motion';
import { useState } from 'react';

const anim = {
    initial: { width: 0 },
    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { width: 0 }
}

const projects = [
    {
        title1: "Duckett ",
        title2: "Architecture",
        src: "ducket_archi.jpeg"
    },
    {
        title1: "Ride",
        title2: "Share",
        src: "ride_share.jpeg"
    },
    {
        title1: "sample",
        title2: "proj",
        src: "sample.jpeg"
    },
    {
        title1: "Nothing",
        title2: "Studio",
        src: "nothing_studio.png"
    },
    {
        title1: "sb",
        title2: "sb",
        src: "sb.jpeg"
    }
];

export default function Index() {

    const [isActive, setIsActive] = useState(false);

    return (
        <main className="main w-full h-600 ">
            <div className="gallery w-full">
                <p className="text-1xl font-regular mb-4 text-left">Featured Work</p>
                {projects.map(project => (
                    <Project key={project.title1} project={project} />
                ))}
            </div>
        </main>
    );
}

function Project({ project }) {
    const { title1, title2, src } = project;
    const [isActive, setIsActive] = useState(false); // Define isActive state here

    return (
        <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="border-t py-2 cursor-pointer w-full flex justify-left items-left">
            <p className="text-5xl">{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="overflow-hidden flex justify-center w-full">
                <img src={`/medias/${src}`} className="w-40" alt={title2} />
            </motion.div>
            <p className="text-5xl">{title2}</p>
        </div>
    );
}

