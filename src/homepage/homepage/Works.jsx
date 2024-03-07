import { motion } from 'framer-motion';
import { useState,useRef } from 'react';


const anim = {
    initial: { width: 0 },
    open: { width: "auto", transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] } },
    closed: { width: 0 }
}

const projects = [
    {
        title1: "Duckett ",
        title2: "Architecture",
        src: "Duckett_Archi.jpg"
        
    },
    {
        title1: "Ride",
        title2: "Share",
        src: "ride_share.jpeg"
    },

];

export default function Index() {

    const [isActive, setIsActive] = useState(false);
    const selectedWorks = useRef(null);

    return (
        <section
            ref={selectedWorks}
        >
            <main className="main w-full h-600">
                <div className="gallery gap-50 w-full">
                    <p className="pl-10 md:pl-80 text-1xl justify-center text-[#8C8C73] font-regular mt-10 mb-4 text-left">Selected Works</p>
                    {projects.map(project => (
                        <Project key={project.title1} project={project} />
                    ))}
                </div>
            </main>
        </section>
        
    );
}

function Project({ project }) {
    const { title1, title2, src } = project;
    const [isActive, setIsActive] = useState(false); // Define isActive state here

    return (
        <div onMouseEnter={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)} className="border-t py-2 cursor-pointer w-full flex justify-center items-center">
            <p className="2xl:text-7xl xl:text-7xl lg:text-6xl sm:text-6xl text-4xl">{title1}</p>
            <motion.div variants={anim} animate={isActive ? "open" : "closed"} className="overflow-hidden flex justify-center w-full">
                <img src={`/medias/${src}`} className="w-40" alt={title2} />
            </motion.div>
            <p className="2xl:text-7xl xl:text-7xl lg:text-6xl sm:text-6xl text-4xl">{title2}</p>
        </div>
    );
}
