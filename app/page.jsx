"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import InfoResume from "@/components/InfoResume";
import Skills from "@/components/Skills";
import Work from "@/components/Work";
import { motion } from "framer-motion";

export const metadata = {
    title: "Portfolio Website - Asmit Malakannawar",
    description:
        "Welcome to Asmit's digital space! This is where he shares all the cool stuff that he has worked on. Take a look around to see my designs, graphics, and more. Each project has a story, and I'd love to share them with you. Let's explore and get inspired together!",
};

export default function Home() {
    const variants = {
        hidden: {
            opacity: 0,
        },
        enter: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.25,
                duration: 1,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.25,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        },
    };

    return (
        <motion.main
            variants={variants}
            initial="hidden"
            animate="enter"
            exit="exit"
            className={styles.main}
        >
            <Header />
            <Gallery />
            <About />
            <InfoResume />
            <Skills />
            <Work />
        </motion.main>
    );
}
