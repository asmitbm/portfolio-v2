import Projects from "@/components/Projects";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import styles from "./page.module.css";

export const metadata = {
    title: "Projects by Asmit Malakannawar",
    description:
        "See what Asmit has been working on! Explore Asmit's projects and case studies to see the creative solutions that he has crafted.",
};

export default function Project() {
    return (
        <div className={styles.background_image}>
            <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.header_name}>
                        <h1>
                            <AnimatedTitle title="Projects." />
                        </h1>
                    </div>
                    <div className={styles.header_para}>
                        <p>
                            <AnimatedText content="All the case studies and concept design work." />
                        </p>
                    </div>
                </div>
                <div className={styles.projects}>
                    <Projects />
                </div>
            </div>
        </div>
    );
}
