"use client";
import styles from "./styles.module.css";
import ExperienceCard from "./ExperienceCard";
import AnimatedTitle from "../Animations/AnimatedTitle";
import data from "./data.js";

export default function Experience() {
    const ExperienceCards = data.details.map((item, index) => {
        return (
            <ExperienceCard
                key={index}
                position={item.position}
                company={item.company}
                companyLink={item.companyLink}
                work={item.work}
                time={item.time}
                address={item.address}
                color={item.color}
                bgcolor={item.bgcolor}
            />
        );
    });

    return (
        <div className={styles.background_image}>
            <div className={styles.experience}>
                <div className={styles.header_name}>
                    <h1>
                        <AnimatedTitle title="Experience." />
                    </h1>
                </div>
                <div className={styles.experience_cards}>{ExperienceCards}</div>
            </div>
        </div>
    );
}
