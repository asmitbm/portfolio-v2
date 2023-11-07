import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import SlidingImages from "@/components/SlidingImages";
import Experience from "@/components/Experience";
import WorkedFor from "@/components/WorkedFor";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
    title: "About Asmit Malakannawar",
};

export default function About() {
    return (
        <div className={styles.main}>
            <div className={styles.header_container}>
                <div className={styles.title}>
                    <h1>
                        <AnimatedTitle title="Hello." />
                    </h1>
                </div>
                <div className={styles.myphoto}>
                    <Image fill src="/dp.webp" alt="aboutme image" />
                </div>
            </div>
            <div className={styles.info_text}>
                <div className={styles.info_text_content}>
                    <p>
                        <AnimatedText content="My name is Asmit Malakannawar, and I'm a product designer from India. I am currently a student pursuing computer science. So, why product design?" />
                        <br />
                        <br />
                        <AnimatedText content="Over the years, I found pushing pixels and building information architecture of an app drew my attention other than figuring out the best data structure or the fastest algorithm." />
                        <br />
                        <br />
                        <AnimatedText content="In my spare time, I experiment with designs in Figma. I also help other designers improve their skills by sharing UI & UX related insights. I also love watching new sci-fi shows!" />
                        <br />
                        <br />
                        <AnimatedText content="Besides that..." />
                    </p>
                </div>
            </div>
            <div className={styles.activities}>
                <div className={styles.activities_content}>
                    <h1>
                        <AnimatedTitle title="I love attending conferences, travelling and photography!" />
                    </h1>
                </div>
                <div className={styles.sliding_images}>
                    <SlidingImages />
                </div>
            </div>
            <Experience />
            <WorkedFor />
        </div>
    );
}
