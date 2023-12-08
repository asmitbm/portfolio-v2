"use client";
import { useEffect } from "react";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import SlidingImages from "@/components/SlidingImages";
import Experience from "@/components/Experience";
import WorkedWith from "@/components/WorkedWith";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "About Asmit Malakannawar",
    description:
        "Asmit Malakannawar is a product designer from India. He is an open source enthusiast. He's a member of the GNOME Foundation and a part of event organizing committee to help plan events like GUADEC and GNOME Asia. Asmit has been involved in open source programs like Google Summer of Code, Linux Foundation Mentorship program, and Google Season of Docs. Learn more here. ",
};

export default function About() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.main}>
            <div className={styles.header_container}>
                <div className={styles.title}>
                    <h1>
                        <AnimatedTitle title="Hello." />
                    </h1>
                </div>
                <div className={styles.myphoto}>
                    <Image fill src="/dp.webp" alt="aboutme image" />
                </div>
            </div>
            <div className={styles.info_text}>
                <div className={styles.info_text_content}>
                    <p>
                        <AnimatedText content="My name is Asmit Malakannawar, and I'm a product designer from India. I am currently a student pursuing computer science. So, why product design?" />
                        <br />
                        <br />
                        <AnimatedText content="Over time, I've been drawn to the creative side of things — manipulating pixels and curating the visual language of applications — rather than getting lost in the complexities of finding the optimal data structure or the quickest algorithm." />
                        <br />
                        <br />
                        <AnimatedText content="In my spare time, I experiment with icon and graphic designs in Figma. I help other designers improve their skills by sharing UI & UX related insights. I also love watching new sci-fi shows!" />
                        <br />
                        <br />
                        <AnimatedText content="Besides that..." />
                    </p>
                </div>
            </div>
            <div className={styles.activities}>
                <div className={styles.activities_content}>
                    <h1>
                        <AnimatedTitle title="I love attending conferences, meeting people, travelling and photography!" />
                    </h1>
                </div>
                <div className={styles.sliding_images}>
                    <SlidingImages />
                </div>
            </div>
            <Experience />
            <WorkedWith />
        </div>
    );
}
