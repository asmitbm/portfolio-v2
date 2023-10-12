import Projects from "@/components/Projects";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import styles from "./page.module.css";

export const metadata = {
    title: "Projects by Asmit Malakannawar",
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
                        <AnimatedText content="All the case studies and concept design work." />
                    </div>
                </div>
                <div className={styles.projects}>
                    <Projects />
                </div>
            </div>
        </div>
    );
}
