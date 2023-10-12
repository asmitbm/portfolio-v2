"use client";
import styles from "./styles.module.css";
import { useEffect, useRef } from "react";
import { useAnimation, motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import data from "./data.js";

export default function Work() {
    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"],
    });

    const height = useTransform(scrollYProgress, [0, 0.83], [100, 0]);

    const ProjectCards = data.projects.map((item, index) => {
        return (
            <ProjectCard
                key={index}
                title={item.title}
                src={item.src}
                description={item.description}
                period={item.period}
                link={item.link}
                color={item.color}
                bgcolor={item.bgcolor}
            />
        );
    });

    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    // Animation
    const AnimationUp = {
        hidden: {
            opacity: 0,
            y: `4em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 1,
                ease: [0.5, 0.75, 0.4, 0.9],
            },
        },
    };

    return (
        <div>
            <motion.div className={styles.work}>
                <div className={styles.projects_single}>
                    <div>{ProjectCards[0]}</div>
                    <div>{ProjectCards[1]}</div>
                    <div>{ProjectCards[2]}</div>
                </div>
                <motion.div className={styles.more_projects}>
                    <Link
                        href="/projects"
                        className={styles.more_projects_button}
                    >
                        More Projects
                    </Link>
                </motion.div>
            </motion.div>
            <motion.div style={{ height }} className={styles.circleContainer}>
                <div className={styles.circle}></div>
            </motion.div>
        </div>
    );
}
