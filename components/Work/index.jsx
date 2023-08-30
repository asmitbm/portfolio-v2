"use client";
import styles from "./styles.module.css";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Work() {
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
        <motion.div
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
            className={styles.work}
        >
            Hi
        </motion.div>
    );
}
