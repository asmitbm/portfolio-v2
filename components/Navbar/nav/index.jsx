"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../anim";
import Body from "./Body";
import Footer from "./Footer";

const links = [
    {
        title: "About",
        href: "/about",
    },
    {
        title: "Work",
        href: "/work",
    },
    {
        title: "Blog",
        href: "https://dev.to/asmitbm",
        target: "_blank",
    },
    {
        title: "Contact",
        href: "/contact",
    },
];

export default function Nav() {
    const [selectedLink, setSelectedLink] = useState({
        isActive: false,
        index: 0,
    });

    return (
        <motion.div
            variants={height}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.nav}
        >
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <Body
                        links={links}
                        selectedLink={selectedLink}
                        setSelectedLink={setSelectedLink}
                    />
                    <Footer />
                </div>
            </div>
        </motion.div>
    );
}
