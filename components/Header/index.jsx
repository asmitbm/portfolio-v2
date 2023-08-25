"use client";
import styles from "./styles.module.css";
import ScrollText from "./ScrollText";
import AnimatedTitle from "../Animations/AnimatedTitle";
import AnimatedText from "../Animations/AnimatedText";

export default function Header() {
    return (
        <div>
            <div id="header" className={styles.header}>
                <div className={styles.header_name}>
                    <div className={styles.header_hello}>
                        <AnimatedTitle title="Hello" />
                    </div>
                    <div className={styles.header_asmit}>
                        <AnimatedTitle title="I'm Asmit." />
                    </div>
                </div>
                <div className={styles.header_para}>
                    <AnimatedText
                        content="An open source enthusiast and a product designer.
                        Available for special projects."
                    />
                </div>
            </div>
            <ScrollText />
        </div>
    );
}
