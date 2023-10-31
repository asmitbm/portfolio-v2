"use client";
import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.css";
import Image from "next/image";

const slider1 = [
    {
        color: "#FDEFF3",
        src: "1.webp",
    },
    {
        color: "#FDF9EF",
        src: "1.webp",
    },
    {
        color: "#EFF5FD",
        src: "1.webp",
    },
    {
        color: "#FDF5EF",
        src: "1.webp",
    },
];

const slider2 = [
    {
        color: "#FDEFF3",
        src: "1.webp",
    },
    {
        color: "#FDF9EF",
        src: "1.webp",
    },
    {
        color: "#FDF5EF",
        src: "1.webp",
    },
    {
        color: "#EFF5FD",
        src: "1.webp",
    },
];

export default function SlidingImages() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

    return (
        <div ref={container} className={styles.slidingImages}>
            <motion.div style={{ x: x1 }} className={styles.slider}>
                {slider1.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.project}
                            style={{ backgroundColor: project.color }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/gallery/${project.src}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <motion.div style={{ x: x2 }} className={styles.slider}>
                {slider2.map((project, index) => {
                    return (
                        <div
                            key={index}
                            className={styles.project}
                            style={{ backgroundColor: project.color }}
                        >
                            <div className={styles.imageContainer}>
                                <Image
                                    fill={true}
                                    alt={"image"}
                                    src={`/gallery/${project.src}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
        </div>
    );
}
