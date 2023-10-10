"use client";
import Image from "next/image";
import Link from "next/link";
import { allProjects } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { getMDXComponent } from "next-contentlayer/hooks";
import PostCard from "@/components/Projects/PostCard/index.jsx";
import styles from "./styles.module.css";

const ProjectContent = ({ project }) => {
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
            initial={{ opacity: 0, y: 0 }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, duration: 0.5 },
            }}
            viewport={{ once: true }}
            className={styles.main}
        >
            <div className={styles.main_nav}>
                <Link href="/projects">
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
                        width={1065}
                        height={644}
                        className="object-cover object-top"
                        alt={project.title}
                    />
                </div>
                <article className={styles.article_content}>
                    <div className={styles.work}>
                        <div className={styles.work_info}>
                            <div className={styles.title_name}>
                                <div className={styles.title}>
                                    <p>Client</p>
                                </div>
                                <div className={styles.name}>
                                    {project.client}
                                </div>
                            </div>

                            <div className={styles.title_name}>
                                <div className={styles.title}>
                                    <p>Year</p>
                                </div>
                                <div className={styles.name}>
                                    {project.year}
                                </div>
                            </div>

                            <div className={styles.title_name}>
                                <div className={styles.title}>
                                    <p>Role</p>
                                </div>
                                <div className={styles.name}>
                                    {project.role}
                                </div>
                            </div>
                        </div>
                    </div>
                    <MDXContent />
                </article>
            </div>

            {/* More Projects*/}
            <div className="max-w-4xl mx-auto mt-20 lg:mt-32">
                <h2 className="text-2xl text-gray-700 mb-10">More Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div className="flex justify-center mt-10">
                    <Link
                        href="/projects"
                        className="transition-all duration-300 ease-in-out text-[11.5px] tracking-[2px] font-bold uppercase bg-violet-600 py-4 px-5 text-white hover:bg-white hover:text-violet-600 hover:shadow-2xl"
                    >
                        View all projects
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectContent;
