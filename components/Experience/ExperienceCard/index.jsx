"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

export default function ExperienceCard(props) {
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

    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
            whileHover={{
                scale: 0.96,
                transition: { duration: 0.3 },
            }}
            className={styles.container}
        >
            <motion.div
                layout
                transition={{ layout: { duration: 1, type: "spring" } }}
                onClick={() => setIsOpen(!isOpen)}
                className={styles.card}
                style={{
                    borderRadius: "1rem",
                    width: isOpen ? "85vw" : "72vw",
                    backgroundColor: `${props.bgcolor}`,
                }}
            >
                <div className={styles.work_details}>
                    <div className={styles.title_company}>
                        <motion.h2
                            style={{
                                color: `${props.color}`,
                            }}
                            layout="position"
                        >
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
                        transition={{ duartion: 1 }}
                        className={styles.work}
                    >
                        <ul className={styles.list}>
                            {props.work.map((details, index) => (
                                <li key={index} className={styles.listItem}>
                                    {details}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}
