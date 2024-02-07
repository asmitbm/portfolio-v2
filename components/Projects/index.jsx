"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { allProjects } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const Items = ({ currentItems }) => {
    return (
        <>
            {currentItems &&
                currentItems.map((project, index) => {
                    index *= 0.05;
                    return (
                        <motion.div
                            className={styles.projects_card}
                            initial={{ opacity: 0, y: -30 }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                transition: { delay: index, duration: 0.3 },
                            }}
                            whileHover={{
                                scale: 0.95,
                                transition: { duration: 0.3 },
                            }}
                            viewport={{ once: true }}
                            key={index}
                            style={{ backgroundColor: `${project.bgcolor}` }}
                        >
                            <div className={styles.card}>
                                <Link href={project.url}>
                                    <div className={styles.imageWrapper}>
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className={styles.project_image}
                                        />
                                    </div>
                                </Link>
                                <div className={styles.project_content}>
                                    <span className={styles.project_role}>
                                        <p>{project.role}</p>
                                    </span>
                                    <div className={styles.project_title}>
                                        <h3>
                                            <Link
                                                style={{
                                                    color: `${project.color}`,
                                                }}
                                                href={project.url}
                                            >
                                                {project.title}
                                            </Link>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
        </>
    );
};

const Projects = () => {
    const items = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );
    const ref = useRef(null);

    return (
        <div className={styles.container} ref={ref}>
            <Items currentItems={items} />
        </div>
    );
};

export default Projects;
