import styles from "./styles.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import AnimatedTitle from "../Animations/AnimatedTitle";
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
                            <Link href="mailto:asmitbm2952002@gmail.com">
                                email
                            </Link>
                        </div>
                        <div className={styles.button}>
                            <Link href="https://www.behance.net/asmitbm">
                                behance
                            </Link>
                        </div>
                        <div className={styles.button}>
                            <Link href="https://github.com/asmitbm">
                                github
                            </Link>
                        </div>
                        <div className={styles.button}>
                            <Link href="https://twitter.com/asmitbm">
                                twitter
                            </Link>
                        </div>
                        <div className={styles.button}>
                            <Link href="https://www.linkedin.com/in/asmitbm/">
                                linkedin
                            </Link>
                        </div>
                        <div className={styles.button}>
                            <Link href="mailto:asmitbm2952002@gmail.com">
                                bio.link
                            </Link>
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
