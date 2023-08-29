"use client";
import styles from "./styles.module.css";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedText from "@/components/Animations/AnimatedText";

const images = [
    "figma.svg",
    "framer.svg",
    "canva.svg",
    "ai.svg",
    "javascript.svg",
    "nextjs.svg",
    "webflow.svg",
    "tailwindcss.svg",
    "css.svg",
];

const SkillsLogos = [
    {
        title: "Figma",
        src: "figma.svg",
        link: "https://www.figma.com/",
    },
    {
        title: "Framer",
        src: "framer.svg",
        link: "https://www.framer.com/",
    },
    {
        title: "Canva",
        src: "canva.svg",
        link: "https://www.canva.com/",
    },
    {
        title: "Adobe Illustrator",
        src: "ai.svg",
        link: "https://www.adobe.com/in/products/illustrator.html",
    },
    {
        title: "JavaScript",
        src: "javascript.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
        title: "Next.js",
        src: "nextjs.svg",
        link: "https://nextjs.org/",
    },
    {
        title: "Webflow",
        src: "webflow.svg",
        link: "https://webflow.com",
    },
    {
        title: "Tailwind CSS",
        src: "tailwindcss.svg",
        link: "https://tailwindcss.com/",
    },
    {
        title: "CSS",
        src: "css.svg",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
];

function Logo({ title, src, link }) {
    return (
        <div className={styles.container}>
            <Link href={link}>
                <Image
                    src={`/skills/${src}`}
                    alt={title}
                    title={title}
                    role="img"
                    fill
                />
            </Link>
        </div>
    );
}

function LogoAnimation({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } =
            ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX, y: middleY });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            style={{ position: "relative" }}
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
            }}
        >
            {children}
        </motion.div>
    );
}

export default function Skills() {
    return (
        <div className={styles.skills}>
            <div className={styles.skills_text}>
                <div className={styles.skills_text_one}>
                    <p>
                        <AnimatedText content="Tools and Technologies" />
                    </p>
                </div>
                <div className={styles.skills_text_two}>
                    <p>
                        <AnimatedText content="I am familiar with" />
                    </p>
                </div>
            </div>
            <div className={styles.skills_logos}>
                <div className={styles.logos_container}>
                    {SkillsLogos.map((props, idx) => (
                        <LogoAnimation key={idx}>
                            <Logo key={idx} {...props} />
                        </LogoAnimation>
                    ))}
                </div>
            </div>
        </div>
    );
}
