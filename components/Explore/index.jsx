"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedText from "@/components/Animations/AnimatedText";

export default function Explore() {
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
            <motion.div
                initial="hidden"
                ref={ref}
                animate={ctrls}
                variants={AnimationUp}
                className={styles.explore}
            >
                <motion.div
                    whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                    className={styles.figma}
                >
                    <Link
                        target="_blank"
                        className={styles.figma_link}
                        href="https://www.figma.com/@asmitbm"
                    >
                        <div className={styles.figma_image}>
                            <Image src="figma.svg" alt="image" fill={true} />
                        </div>
                        <div className={styles.figma_text}>
                            <h3>
                                <AnimatedText content="Dive into my collection of Figma assets!" />
                            </h3>
                        </div>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                    className={styles.info_text}
                >
                    <Link href="/projects">
                        <div className={styles.info_text_one}>
                            <p>
                                <AnimatedText content="Like these projects?" />
                            </p>
                        </div>
                        <div className={styles.info_text_two}>
                            <p>
                                <AnimatedText content="There's more to explore!" />
                            </p>
                        </div>
                    </Link>
                </motion.div>
            </motion.div>
        </div>
    );
}
