"use client";
import styles from "./page.module.css";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import InfoResume from "@/components/InfoResume";
import Skills from "@/components/Skills";
import { motion } from "framer-motion";

export default function Home() {
    const variants = {
        hidden: {
            opacity: 0,
            //x: -32,
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
            //x: 32,
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
        </motion.main>
    );
}
