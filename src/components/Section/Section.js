import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from './Section.module.css';
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// can i change the sensitivity of the scroll? It seems really sensitive.

export default function Section({sectionTitle, scrollTo, goToSectionRef, showArrow, backgroundColor, children}) {
    const sectionTitleRef = useRef();
    const sectionRef = useRef();

    const fontColor = backgroundColor !== '#FFFFFF' ? '#FFFFFF' : '#000000';

    useEffect(() => {
        gsap.fromTo(
            sectionTitleRef.current,
            {
                autoAlpha: 0,
                y: -20,
            },
            {
                y: 0,
                autoAlpha: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    scroller: ".container",
                    trigger: sectionTitleRef.current,
                    start: "top 60%",
                    end: "bottom 0%",
                    toggleActions: "play none restart reverse",
                }
            },
        );
        return () => {};
    }, []);

    return (
        <div className={styles.section} ref={sectionRef}>
            <div className={styles.container} style={{backgroundColor: backgroundColor, fontColor: fontColor}}>
                <h2 className={styles.sectionTitle} ref={sectionTitleRef}>{sectionTitle}</h2>
                <div>{children}</div>
            </div>
            {showArrow && (
                <button
                    onClick={() => scrollTo(goToSectionRef)}
                    className={styles.downArrow}
                ></button>
            )}
        </div>
    );
}