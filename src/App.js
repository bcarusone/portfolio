import './App.css';
import { useRef } from "react";
import Section from "./components/Section/Section.js";
import styles from "./App.module.css";
import HomeContent from "./pages/Home/Home.js";
import AboutContent from './pages/About/About.js';
import SkillsContent from './pages/Skills/Skills.js';
import WorksContent from './pages/Works/Works.js';
import ExperienceContent from './pages/Experience/Experience.js';
import RecommendationContent from './pages/Recommendations/Recommendations.js';
import ContactContent from './pages/Contact/Contact.js';

function App() {
    const HomeSection = useRef();
    const AboutSection = useRef();
    const SkillsSection = useRef();
    const WorksSection = useRef();
    const ExperienceSection = useRef();
    const RecommendationSection = useRef();
    const ContactSection = useRef();

    function scrollTo(section) {
        section.current.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div>
            <div className={`container ${styles.container}`} >
                <div ref={HomeSection}>
                    <Section
                        sectionTitle={""}
                        goToSectionRef={AboutSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#2C3E50'}
                    >
                        <HomeContent />
                    </Section>
                </div>
                <div ref={AboutSection}>
                    <Section
                        sectionTitle={"About"}
                        goToSectionRef={SkillsSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#FFFFFF'}
                    >
                        <AboutContent />
                    </Section>
                </div>
                <div ref={SkillsSection}>
                    <Section
                        sectionTitle={"Skills"}
                        goToSectionRef={WorksSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#FFFFFF'}
                    >
                        <SkillsContent />
                    </Section>
                </div>
                <div ref={WorksSection}>
                    <Section
                        sectionTitle={"Works"}
                        goToSectionRef={ExperienceSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#FFFFFF'}
                    >
                        <WorksContent />
                    </Section>
                </div>
                <div ref={ExperienceSection}>
                    <Section
                        sectionTitle={"Experience"}
                        goToSectionRef={RecommendationSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#FFFFFF'}
                    >
                        <ExperienceContent />
                    </Section>
                </div>
                <div ref={RecommendationSection}>
                    <Section
                        sectionTitle={"Recommendations"}
                        goToSectionRef={ContactSection}
                        scrollTo={scrollTo}
                        showArrow={true}
                        backgroundColor={'#FFFFFF'}
                    >
                        <RecommendationContent />
                    </Section>
                </div>
                <div ref={ContactSection}>
                    <Section
                        sectionTitle={"Contact"}
                        goToSectionRef={HomeSection}
                        scrollTo={scrollTo}
                        showArrow={false}
                        backgroundColor={'#FFFFFF'}
                    >
                        <ContactContent />
                    </Section>
                </div>
            </div>
        </div>
    );
}

export default App;
