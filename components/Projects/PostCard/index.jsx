"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

const PostCard = ({ project, index }) => {
    index *= 0.05;
    return (
        <div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: index, duration: 0.3 },
                }}
                viewport={{ once: true }}
                className={styles.post_card}
                style={{ backgroundColor: `${project.bgcolor}` }}
            >
                <Link href={project.url} className={styles.imageWrapper}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1064}
                        height={644}
                        className={styles.image}
                    />
                </Link>
                <div className={styles.card_content}>
                    <p>{project.role}</p>
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
            </motion.div>
        </div>
    );
};

export default PostCard;
