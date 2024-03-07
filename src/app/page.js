"use client";

import { useState, useEffect, useRef} from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PreLoader from '../components/ui/Preloader';
import Cursor from '../components/ui/Cursor';

import Home from '../components/homepage/Home';
import About from '../components/homepage/About';
import Works from '../components/homepage/Works';
import Contact from '../components/homepage/Contact';

const IndexPage = () => {
  const [loading, setLoading] = useState(true);
  gsap.registerPlugin(ScrollTrigger);

  const sectionRefs = useRef([]); // Creating a sectionRefs array

  // Scrub animation of section headings
  useEffect(() => {
    //TODO Learn useContext and useRef here
    const sectionHeadings = document.querySelectorAll(".section-heading");
    sectionHeadings.forEach((heading) => {
      const headings = heading.querySelectorAll(".heading");

      headings.forEach((individualHeading) => {
        ScrollTrigger.create({
          trigger: heading,
          start: "top 550px",
          end: "bottom 550px",
          animation: gsap.to(individualHeading, {
            opacity: 1,
            y: 0,
            ease: "power4.out",
            duration: 1,
          }),
          toggleActions: "play none none none",

        });
        ScrollTrigger.refresh()
      });
    });
  }, []);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the time according to your requirements

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col justify-auto items-auto h-screen">
      {loading ? (
        <PreLoader />
      ) : (
        <>
        <Cursor/>
            <Home />
            <About />
            <Works/>
            <div>
            <Contact/>
            </div>
            
        </>
      )}
    </div>
  );
};

export default IndexPage;
