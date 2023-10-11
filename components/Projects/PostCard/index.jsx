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
                className={`relative overflow-hidden `}
            >
                <Link
                    href={project.url}
                    className="relative block overflow-hidden group"
                >
                    <Image
                        src={project.image}
                        alt={project.title}
                        width={1064}
                        height={644}
                        className="object-cover object-center h-[400px] !max-w-full duration-300 transition-all ease-in-out group-hover:scale-[1.05]"
                    />
                </Link>
                <div className="py-8 px-2">
                    <span className="block mb-1 text-gray-500">
                        {project.role}
                    </span>
                    <h3 className="mb-4">
                        <Link
                            href={project.url}
                            className="text-2xl leading-none"
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
