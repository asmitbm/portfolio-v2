"use client";
import { useState } from "react";
import styles from "./styles.module.css";
import AnimatedTitle from "../Animations/AnimatedTitle";
import { AnimatePresence, motion } from "framer-motion";

export const projects = [
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    {
        title: "Algochurn",
        description:
            "A web app that allows users to practice for front-end and UI interviews.",
        link: "https://algochurn.com",
    },
    // ...rest of the projects
];

export default function WorkedFor() {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={styles.background_image}>
            <div className={styles.worked_for}>
                <div className={styles.header_name}>
                    <h1>
                        <AnimatedTitle title="Worked For." />
                    </h1>
                </div>
                <div className={styles.work_cards}>
                    <div className={styles.card_container}>
                        {projects.map((project, idx) => (
                            <div
                                key={project?.link}
                                className={styles.hover_container}
                                onMouseEnter={() => setHoveredIndex(idx)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <AnimatePresence>
                                    {hoveredIndex === idx && (
                                        <motion.span
                                            className={styles.card_background}
                                            layoutId="hoverBackground" // required for the background to follow
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                transition: {
                                                    duration: 0.15,
                                                },
                                            }}
                                            exit={{
                                                opacity: 0,
                                                transition: {
                                                    duration: 0.15,
                                                    delay: 0.2,
                                                },
                                            }}
                                        />
                                    )}
                                </AnimatePresence>
                                <div className={styles.logo_card}>
                                    <div className={styles.card}>
                                        <div className="p-4">
                                            <p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
