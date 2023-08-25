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
                        <h1>
                            <AnimatedTitle title="Nice to" />
                        </h1>
                    </div>
                    <div className={styles.aboutme_meetyou}>
                        <h1>
                            <AnimatedTitle title="meet you :&#41;" />
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
                <Image src="/dp.webp" alt="aboutme image" fill />
            </div>
        </div>
    );
}
