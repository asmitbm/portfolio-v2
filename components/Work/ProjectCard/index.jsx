"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import AnimatedText from "@/components/Animations/AnimatedText";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";

export default function ProjectCard(props) {
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
            whileHover={{
                scale: 0.95,
                transition: { duration: 0.3 },
            }}
            className={styles.container}
        >
            <Link
                href={props.link}
                className={styles.card}
                style={{ backgroundColor: `${props.bgcolor}` }}
            >
                <div className={styles.cardWrapper}>
                    <div className={styles.project_header}>
                        <div className={styles.header}>
                            <div className={styles.title}>
                                <h2 style={{ color: `${props.color}` }}>
                                    <AnimatedTitle title={props.title} />
                                </h2>
                            </div>
                            <div className={styles.content}>
                                <h3>
                                    <AnimatedText
                                        className={styles.content_text}
                                        content={props.description}
                                    />
                                </h3>
                            </div>
                        </div>
                        <div className={styles.project_period}>
                            <p style={{ color: `${props.color}` }}>
                                <AnimatedText
                                    className={styles.project_period_text}
                                    content={props.period}
                                />
                            </p>
                        </div>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            className={styles.image}
                            title={props.title}
                            alt={props.title}
                            src={props.src}
                            fill={true}
                        />
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
