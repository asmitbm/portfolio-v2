"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "../Animations/AnimatedTitle";

export default function About() {
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
        <div>
            <Link href="/about">
                <motion.div
                    whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                    initial="hidden"
                    ref={ref}
                    animate={ctrls}
                    variants={AnimationUp}
                    className={styles.aboutme}
                >
                    <div className={styles.aboutme_text}>
                        <div className={styles.aboutme_text_heading}>
                            <div className={styles.aboutme_niceto}>
                                <h1>
                                    <AnimatedTitle title="Nice to" />
                                </h1>
                            </div>
                            <div className={styles.aboutme_meetyou}>
                                <h1>
                                    <AnimatedTitle title="meet you :)" />
                                </h1>
                            </div>
                        </div>
                        <div className={styles.aboutme_text_line}>
                            <h4>
                                <AnimatedTitle title="About Me" />
                            </h4>
                        </div>
                    </div>
                    <div className={styles.aboutme_photo}>
                        <Image fill={true} src="/dp.webp" alt="aboutme image" />
                    </div>
                </motion.div>
            </Link>
        </div>
    );
}
