import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function NavBar({ sectionRefs }) {
  const navBar = useRef(null);
  const logo = useRef(null);
  const cta = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize ScrollTrigger for each section
    if (sectionRefs && sectionRefs.length > 0) {
      sectionRefs.forEach((section) => {
        ScrollTrigger.create({
          trigger: section,
          start: "top 375px",
          end: "bottom 300px",
          // Animation to be triggered when the section is in view
          animation: gsap
            .timeline()
            .to(navBar.current, { color: "#DDDDD5" }) // Change color of navbar
            .to(cta.current, { backgroundColor: "#D1D1C7", color: "#0E0E0C" }, 0) // Change cta button styles
            .to(".bg-secondary-100", { backgroundColor: "#0E0E0C" }, 0), // Change background color
          toggleActions: "restart reverse restart reverse",
        });
      });
    }
  }, [sectionRefs]);

  useEffect(() => {
    // Function to apply magnetic effect on links
    const applyMagneticEffect = (element) => {
      const xTo = gsap.quickTo(element, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
      const yTo = gsap.quickTo(element, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

      // Mousemove event to track mouse position and apply magnetic effect
      element.addEventListener("mousemove", (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = element.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        xTo(x * 0.35);
        yTo(y * 0.35);
      });

      // Reset position on mouse leave
      element.addEventListener("mouseleave", () => {
        xTo(0);
        yTo(0);
      });
    };

    // Apply magnetic effect to all links
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      applyMagneticEffect(link);
    });
  }, []);

  return (
    <header ref={navBar} className="fixed top-0 z-50 flex w-full items-center justify-between bg-secondary-100 px-5 py-3">
      {/* Logo */}
      <a href="#hero" aria-label="Logo" className="z-50">
        <img
          ref={logo}
          src='./assets/logo/logo.png'
          width="80"
          height="45"
          viewBox="0 0 121 45"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        />
      </a>
      {/* Navigation links */}
      <nav className="space-x-7 font-grotesk text-body-3 sm:block">
        <a href="#about" className="group hidden md:inline-block">
          <span className="text-about">about</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full" />
        </a>
        <a href="#services" className="group hidden md:inline-block">
          <span className="text-services">services</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full" />
        </a>
        <a href="#works" className="group hidden md:inline-block">
          <span className="text-projects">projects</span>
          <span className="absolute bottom-0 left-0 h-[0.125em] w-0 rounded-full bg-secondary-600 duration-300 ease-in-out group-hover:w-full" />
        </a>
        {/* Call to action button */}
        <a ref={cta} className="button hover:bg-transparent" href="#contact">
          <span className="text-contact relative w-fit">
            <span className="absolute bottom-2 h-[0.15em] w-0 bg-secondary-700 opacity-90 duration-300 ease-out group-hover:w-full" />
            <span>contact</span>
          </span>
        </a>
      </nav>
    </header>
  );
}
