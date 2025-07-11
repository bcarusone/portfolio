import { useRef } from "react";
import Section from "./components/Section/Section.js";
import styles from "./Home.module.css";

export default function Home() {
    const HomeSection = useRef();
    const AboutSection = useRef();
    const SkillsSection = useRef();

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div className={`container ${styles.container}`} >
                <div ref={HomeSection}>
                    <Section
                        headline={"Home"}
                        goToSectionRef={AboutSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                    />
                </div>
                <div ref={AboutSection}>
                    <Section
                        headline={"About"}
                        goToSectionRef={SkillsSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                    />
                </div>
                <div ref={SkillsSection}>
                    <Section
                        headline={"Skills"}
                        goToSectionRef={HomeSection}
                        scrollTo={scrollTo}
                        showArrow={false}
                    />
                </div>
            </div>
        </div>
    );
}