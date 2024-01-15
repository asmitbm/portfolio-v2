"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import styles from "./styles.module.css";
import ScrollText from "./ScrollText";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";
import { renderCanvas } from "./renderCanvas";

export default function Header() {
    useEffect(() => {
        renderCanvas();
    }, []);

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
        <div className={styles.main}>
            <div id="header" className={styles.header}>
                <div className={styles.header_name}>
                    <div className={styles.header_hello}>
                        <h1>
                            <AnimatedTitle title="Hello" />
                        </h1>
                    </div>
                    <div className={styles.header_asmit}>
                        <h1>
                            <AnimatedTitle title="I'm Asmit." />
                        </h1>
                    </div>
                </div>
                <div className={styles.header_para}>
                    <div className={styles.para}>
                        <p>
                            <AnimatedText content="A product designer and an open source enthusiast." />
                        </p>
                    </div>
                    <div className={styles.resume_project}>
                        <motion.div
                            initial="hidden"
                            ref={ref}
                            animate={ctrls}
                            variants={AnimationUp}
                            className={styles.resume_project_container}
                        >
                            <div className={styles.view_buttons}>
                                <Link
                                    target="_blank"
                                    href="https://drive.google.com/file/d/1widnWPHsEyAQaInQxYVlgVemt1bjdDwp/view?usp=sharing"
                                >
                                    <h5>Resume.</h5>
                                </Link>
                            </div>
                            <div className={styles.view_buttons}>
                                <Link href="/projects">
                                    <h5>Projects.</h5>
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {/*<ScrollText />*/}
            <canvas className={styles.canvas_pointer} id="canvas"></canvas>
        </div>
    );
}
