"use client";
import styles from "./styles.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";
import Tooltip from "../Tooltip";
import Link from "next/link";

export default function Contact() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end end"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 0]);
    return (
        <motion.div
            id="contact"
            style={{ y }}
            ref={container}
            className={styles.contact}
        >
            <div className={styles.body}>
                <div className={styles.section}>
                    <div className={styles.title}>
                        <h1>
                            <AnimatedTitle title="Let's Work" />
                        </h1>
                        <h1>
                            <AnimatedTitle title="Together." />
                        </h1>
                    </div>
                    <div className={styles.nav}>
                        <div className={styles.button}>
                            <Tooltip label="Hey, Let's Talk">
                                <Link
                                    target="_blank"
                                    href="mailto:asmitbm2952002@gmail.com"
                                >
                                    <AnimatedText content="email" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="Design Stuff <3">
                                <Link
                                    target="_blank"
                                    href="https://www.behance.net/asmitbm"
                                >
                                    <AnimatedText content="behance" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="My OSS Stuff :)">
                                <Link
                                    target="_blank"
                                    href="https://github.com/asmitbm"
                                >
                                    <AnimatedText content="github" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="I'm Here Most Often">
                                <Link
                                    target="_blank"
                                    href="https://twitter.com/asmitbm"
                                >
                                    <AnimatedText content="twitter" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="Experiences Here">
                                <Link
                                    target="_blank"
                                    href="https://www.linkedin.com/in/asmitbm/"
                                >
                                    <AnimatedText content="linkedin" />
                                </Link>
                            </Tooltip>
                        </div>
                        <div className={styles.button}>
                            <Tooltip label="All My Links">
                                <Link
                                    target="_blank"
                                    href="https://asmit.bio.link/"
                                >
                                    <AnimatedText content="bio.link" />
                                </Link>
                            </Tooltip>
                        </div>
                    </div>
                </div>

                <div className={styles.info}>
                    <div>
                        <h3>Made with ❤️ by Asmit Malakannawar</h3>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
