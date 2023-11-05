"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

export default function ExperienceCard(props) {
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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
            className={styles.container}
        >
            <motion.div
                whileHover={{ scale: 0.95, transition: { duration: 0.3 } }}
                whileTap={{ scale: 1.0 }}
                layout
                transition={{ layout: { duration: 0.8, type: "spring" } }}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.card}
                style={{ borderRadius: "1rem" }}
            >
                <div className={styles.work_details}>
                    <div className={styles.title_company}>
                        <motion.h2 layout="position">
                            {props.position}
                        </motion.h2>
                        <motion.h3 layout="position">
                            <Link href={props.companyLink}>
                                {props.company}
                            </Link>
                        </motion.h3>
                    </div>
                    <div className={styles.time_address}>
                        <motion.h3 layout="position">{props.time}</motion.h3>
                        <motion.h4 layout="position">{props.address}</motion.h4>
                    </div>
                </div>

                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duartion: 0.8 }}
                        className={styles.work}
                    >
                        <p>{props.work}</p>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}
