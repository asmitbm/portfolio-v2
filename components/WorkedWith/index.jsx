"use client";
import { useState } from "react";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

export const projects = [
    {
        title: "GNOME Foundation",
        image: "gnome.svg",
        link: "https://foundation.gnome.org/",
    },
    {
        title: "Quansight",
        image: "quansight.svg",
        link: "https://labs.quansight.org/",
    },
    {
        title: "AsyncAPI Initiative",
        image: "asyncapi.svg",
        link: "https://www.asyncapi.com/",
    },
    {
        title: "Cloud Native Computing Foundation",
        image: "cncf.svg",
        link: "https://www.cncf.io/",
    },
    {
        title: "Weaviate",
        image: "weaviate.svg",
        link: "https://weaviate.io/",
    },
    {
        title: "The Linux Foundation",
        image: "lfx.svg",
        link: "https://www.linuxfoundation.org/",
    },
    {
        title: "conda.org",
        image: "conda.svg",
        link: "https://conda.org/",
    },
    {
        title: "conda-forge",
        image: "conda-forge.svg",
        link: "https://conda-forge.org/",
    },
    {
        title: "ORAS Project",
        image: "oras.svg",
        link: "https://oras.land/",
    },
];

export default function WorkedFor() {
    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className={styles.background_image}>
            <div className={styles.worked_for}>
                <div className={styles.header}>
                    <div className={styles.header_name}>
                        <h1>
                            <AnimatedTitle title="Worked With." />
                        </h1>
                    </div>
                    <div className={styles.header_para}>
                        <p>
                            <AnimatedText content="Organizations I contributed to" />
                        </p>
                    </div>
                </div>
                <div className={styles.work_cards}>
                    <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10">
                        {/** vanilla css not workiing here for some reason */}
                        {projects.map((project, idx) => (
                            <div
                                key={project.link}
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
                                        <div className={styles.logo}>
                                            <Link
                                                target="_blank"
                                                href={project.link}
                                            >
                                                <Image
                                                    alt={project.title}
                                                    src={`/work/${project.image}`}
                                                    width={100}
                                                    height={50}
                                                />
                                            </Link>
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
