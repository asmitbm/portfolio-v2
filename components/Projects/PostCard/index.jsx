"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./styles.module.css";

const PostCard = ({ project, index }) => {
    const ctrls = useAnimation();

    const { ref, inView } = useInView({
        threshold: 0.4,
        triggerOnce: true,
    });

    useEffect(() => {
        if (inView) {
            ctrls.start("visible");
        }
        if (!inView) {
            ctrls.start("hidden");
        }
    }, [ctrls, inView]);

    // Animation
    const AnimationUp = {
        hidden: {
            opacity: 0,
            y: `4em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.5,
                ease: [0.5, 0.75, 0.4, 0.9],
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            ref={ref}
            animate={ctrls}
            variants={AnimationUp}
        >
            <motion.div
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
        </motion.div>
    );
};

export default PostCard;
