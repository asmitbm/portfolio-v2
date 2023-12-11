"use client";
import { useEffect } from "react";
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
                    <div>
                        <p>
                            <AnimatedText content="An open source enthusiast and a product designer. Available for special projects." />
                        </p>
                    </div>
                    <div className={styles.resume_project}>
                        <div>
                            <p>
                                <AnimatedText content="Check out my:" />{" "}
                            </p>
                        </div>
                        <div className={styles.resume_project_container}>
                            <div>
                                <Link
                                    className={styles.underline_hover}
                                    target="_blank"
                                    href="https://drive.google.com/file/d/19-rRGWFEnTl59xVNoFtS_8MiJKAcT45j/view?usp=sharing"
                                >
                                    <h5>
                                        <AnimatedText content="Resume." />
                                    </h5>
                                </Link>
                            </div>
                            <div>
                                <Link
                                    className={styles.underline_hover}
                                    href="/projects"
                                >
                                    <h5>
                                        <AnimatedText content="Projects." />
                                    </h5>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollText />
            <canvas className={styles.canvas_pointer} id="canvas"></canvas>
        </div>
    );
}
