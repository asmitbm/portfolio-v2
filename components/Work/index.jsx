"use client";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ProjectCard from "./ProjectCard";
import data from "./data.js";

export default function Work() {
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
        <motion.div className={styles.work}>
            <div className={styles.projects_single}>
                <div>{ProjectCards[0]}</div>
                <div>{ProjectCards[1]}</div>
            </div>
        </motion.div>
    );
}
