"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "../Animations/AnimatedText";
import Explore from "@/components/Explore";
import styles from "./styles.module.css";

export default function AdditionalWork() {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.4,
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
                duration: 0.5,
                ease: [0.5, 0.75, 0.4, 0.9],
            },
        },
    };

    return (
        <motion.div
            className={styles.additional_work}
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
        >
            <div>
                <Explore />
            </div>
            <div className={styles.graphic_design}>
                <p>
                    <AnimatedText content="Off the clock I find joy in graphic and icon design 👇" />
                </p>
            </div>
        </motion.div>
    );
}
