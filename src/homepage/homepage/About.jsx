import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
import Heading from "../ui/Heading";

export default function About() {
  const profile = useRef(null);
  const aboutSection = useRef(null);
  const heading = useRef(null);
  const body = useRef(null);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: "top 200px",
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: "power4.out", duration: 1.25 },
          0.2
        ),

      toggleActions: "play pause resume pause",
    });
    ScrollTrigger.refresh();

  }, [aboutSection]);

  return (
    <section
            ref={aboutSection}
            aria-label="about me"
            className="flex flex-col items-center gap-20 bg-[#1E1E1E] p-10 text-white"
        >
            <div className="container flex flex-col items-start justify-center gap-8 md:flex-row lg:gap-10">
                <div className="top-20 flex flex-col items-center gap-10 sm:sticky md:top-28 md:w-1/2 md:items-start lg:top-32">
                    <Heading title="about me" />

                    <div className="top-28 flex max-h-[400px] max-w-[300px] items-center justify-center overflow-hidden md:sticky md:hidden md:aspect-auto md:w-1/2">
                        <img
                            ref={profile}
                            src="./assets/profile/sova.jpg"
                            loading="lazy"
                            alt="profile"
                        />
                    </div>

                    <div className="w-auto space-y-4 2xl:space-y-10">
                        <p
                            ref={body}
                            className=" text-body-1 translate-y-10 opacity-0 2xl:text-4xl"
                        >
                            I am an independent frontend developer, UI/UX
                            designer and creator based in Palmerston North, New
                            Zealand.
                            <br></br>
                            <br></br>I specialize in crafting elevated,
                            intuitive, and minimalistic designs for startups and
                            small businesses to help them stand out in the
                            digital landscape with a powerful impact.
                            <br></br>
                            <br></br>
                            When I am not designing, I work a IT Feild Support Engineer at DTSL
                            
                        </p>
                    </div>
                </div>

                <div className="top-28 hidden max-h-[500px] max-w-[300px] overflow-hidden rounded-md md:sticky md:block md:w-1/2">
                    <img
                        ref={profile}
                        src="./assets/profile/sova.jpg"
                        loading="lazy"
                        alt="profile"
                    />
                </div>
            </div>

            <div className="container grid grid-cols-1 gap-16 md:grid-cols-3">
                <h2 className="col-span-full text-[#8C8C73] text-bold text-5xl">I can help you with</h2>
                <div className="flex flex-col gap-5">
                    <span className="h-10 border-b border-white">01</span>
                    <h3 className="text-2xl">Design</h3>
                    <p>
                        With a solid track record in designing websites and
                        apps, I deliver strong and user-friendly digital
                        designs. Solid company branding is the foundation of any
                        succesful website.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="h-10 border-b border-white">02</span>
                    <h3 className="text-2xl">Development</h3>
                    <p>
                        I build scalable websites from scratch that fit
                        seamlessly with design. My focus is on micro animations,
                        transitions and interaction. For content management I
                        use Kirby CMS.
                    </p>
                </div>
                <div className="flex flex-col gap-5">
                    <span className="h-10 border-b border-white">03</span>
                    <h3 className="text-2xl">The full package</h3>
                    <p>
                        A complete website from concept to implementation,
                        that's what makes me stand out. My great sense for
                        design and my development skills enable me to create
                        kick-ass projects.
                    </p>
                </div>
            </div>
        </section>
  );
}
