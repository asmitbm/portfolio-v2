"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import AnimatedTitle from "../Animations/AnimatedTitle";

export default function About() {
    return (
        <div className={styles.aboutme}>
            <div className={styles.aboutme_text}>
                <div className={styles.aboutme_text_heading}>
                    <div className={styles.aboutme_niceto}>
                        <AnimatedTitle title="Nice to" />
                    </div>
                    <div className={styles.aboutme_meetyou}>
                        <AnimatedTitle title="meet you :&#41;" />
                    </div>
                </div>
                <div className={styles.aboutme_text_line}>
                    <h4>About Me</h4>
                </div>
            </div>
            <div className={styles.aboutme_photo}>
                <Image src="/dp.webp" alt="aboutme image" fill />
            </div>
        </div>
    );
}
