"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "@/components/Animations/AnimatedText";
import AnimatedTitle from "../Animations/AnimatedTitle";

export default function InfoResume() {
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
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
            className={styles.info}
        >
            <div className={styles.info_text}>
                <div className={styles.info_text_one}>
                    <p>
                        <AnimatedText content="As a Product Designer, I craft experiences that seamlessly blend aesthetics and functionality -" />
                    </p>
                </div>
                <div className={styles.info_text_two}>
                    <p>
                        <AnimatedText content="to create solutions that truly resonate with users." />
                    </p>
                </div>
            </div>
            <motion.div
                whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                className={styles.resume}
            >
                <Link
                    target="_blank"
                    href="https://drive.google.com/file/d/1widnWPHsEyAQaInQxYVlgVemt1bjdDwp/view?usp=sharing"
                >
                    <div className={styles.resume_text}>
                        <h3>
                            <AnimatedTitle title="See My Resume" />
                        </h3>
                    </div>
                </Link>
            </motion.div>
        </motion.div>
    );
}
