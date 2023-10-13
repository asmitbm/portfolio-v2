"use client";
import { useEffect } from "react";
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
                    <AnimatedText content="An open source enthusiast and a product designer. Available for special projects." />
                </div>
            </div>
            <ScrollText />
            <canvas className={styles.canvas_pointer} id="canvas"></canvas>
        </div>
    );
}
