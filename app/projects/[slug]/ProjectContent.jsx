"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { allProjects } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { motion, useScroll, useSpring } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import PostCard from "@/components/Projects/PostCard/index.jsx";
import styles from "./styles.module.css";

export default function ProjectContent({ project }) {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const projects = allProjects.sort((a, b) =>
        compareDesc(new Date(a.date), new Date(b.date))
    );

    let MDXContent;

    if (!projects) return null;

    if (!project) {
        console.log("Post not found");
    } else {
        MDXContent = getMDXComponent(project.body.code);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className={styles.main}
        >
            <div className={styles.main_nav}>
                <Link className={styles.underline_hover} href="/projects">
                    <h2>Projects.</h2>
                </Link>
            </div>
            <div className={styles.article}>
                <div className={styles.article_heading}>
                    <div className={styles.article_title}>
                        <h1>{project.title}</h1>
                    </div>
                    <div className={styles.article_info}>
                        <p>
                            <span className={styles.date_role}>
                                <span>
                                    {format(
                                        parseISO(project.date),
                                        "LLL d, yyyy"
                                    )}
                                </span>
                                <span>•</span>
                                <span>{project.role}</span>
                            </span>
                        </p>
                    </div>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src={project.image}
                        width={1920}
                        height={1080}
                        alt={project.title}
                    />
                </div>
                <div className={styles.work}>
                    <div className={styles.work_info}>
                        <div className={styles.title_name}>
                            <div className={styles.title}>
                                <p>For</p>
                            </div>
                            <div className={styles.name}>{project.for}</div>
                        </div>

                        <div className={styles.title_name}>
                            <div className={styles.title}>
                                <p>Timeline</p>
                            </div>
                            <div className={styles.name}>
                                {project.timeline}
                            </div>
                        </div>

                        <div className={styles.title_name}>
                            <div className={styles.title}>
                                <p>Year</p>
                            </div>
                            <div className={styles.name}>{project.year}</div>
                        </div>

                        <div className={styles.title_name}>
                            <div className={styles.title}>
                                <p>Role</p>
                            </div>
                            <div className={styles.name}>{project.role}</div>
                        </div>
                    </div>
                </div>
                <article className="prose prose-lg mx-auto">
                    <MDXContent />
                </article>
            </div>

            {/* More Projects*/}
            <div className={styles.more_projects}>
                <h2>More Projects</h2>
                <div className={styles.post_cards}>
                    {projects
                        .filter((a) => project.title !== a.title)
                        .map((item, idx) => {
                            if (idx > 2) return null;
                            return (
                                <PostCard
                                    key={idx}
                                    index={idx}
                                    project={item}
                                />
                            );
                        })}
                </div>
                <div className={styles.view_project}>
                    <Link href="/projects">View All Projects</Link>
                </div>
            </div>
            <motion.div className={styles.progress_bar} style={{ scaleX }} />
        </motion.div>
    );
}
