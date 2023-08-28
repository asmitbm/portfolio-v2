"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedText from "@/components/Animations/AnimatedText";
import AnimatedTitle from "../Animations/AnimatedTitle";

export default function InfoResume() {
    return (
        <div className={styles.info}>
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
                whileTap={{ scale: 1.0 }}
                className={styles.resume}
            >
                <Link href="https://drive.google.com/file/d/1CbSuWlYUhNSIGpRgHlR0fgkZEXVrIQMo/view?usp=sharing">
                    <div className={styles.resume_text}>
                        <h3>
                            <AnimatedTitle title="See My Resume" />
                        </h3>
                    </div>
                </Link>
            </motion.div>
        </div>
    );
}
