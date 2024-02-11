import React, { useEffect, useRef } from 'react';
import { useScroll, motion } from 'framer-motion';
import { Provider } from 'react-wrap-balancer';
import { gsap } from "gsap";

const staggerVariants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            staggerChildren: 0.04,
            delayChildren: 0.5,
            staggerDirection: -1,
            duration: 1,
        },
    },
};

const IndexPage = () => {
    const imgContainer = useRef(null);
    const titles = useRef(null);
    const scrollLine = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.from(scrollLine.current, {
            translateX: -40,
            duration: 1.5,
            ease: "power4.inOut",
        });
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.from(imgContainer.current, {
            scale: 1.3,
            duration: 3.25,
            ease: "power3.inOut",
        })
        .to(titles.current, { y: 0, duration: 2, ease: "power4.inOut" }, "-=2.5");
    }, []);

    useScroll(() => {
        // Add your scroll logic here if needed
    });

    return (
        <section id="home" className="home relative flex w-full h-screen select-none items-center justify-center" aria-label="home">
            <div className="flex flex-col justify-center items-auto h-screen overflow-y-auto">
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerVariants}
                    className="text-auto p-4"
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                    <Provider>
                        <div className="container">
                            <motion.h1 ref={titles} variants={staggerVariants} className="text-4xl md:text-8xl lg:text-9xl uppercase tracking-tight font-bold mb-2 font-general" >
                                <span className="block pr-20 text-left">Hi there, I&apos;m</span>
                                <span className="block md:pl-20 lg:pl-20 md:text-right text-left">Shay Galiste</span>
                            </motion.h1>
                            <motion.p ref={titles} variants={staggerVariants} className="font-medium text-primary-100 max-w-full 2xl:text-center md:text-center sm:text-left text-start text-base lg:text-lg xl:text-xl 2xl:text-2xl pl-1 sm:pl-0" >
                                A freelance frontend developer & web designer <br></br>
                                based in Palmerston North, New Zealand.
                            </motion.p>
                        </div>
                    </Provider>
                </motion.div>
            </div>
        </section>
    );
};

export default IndexPage;
