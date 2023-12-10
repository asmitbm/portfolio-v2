"use client";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { background, hidenav } from "./anim";
import Nav from "./nav";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    function update() {
        if (scrollY?.current < scrollY?.prev) {
            setHidden(false);
        } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
            setHidden(true);
        }
    }

    useEffect(() => {
        scrollY.onChange(() => update());
    });

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsActive(false);
    }, [pathname]);

    return (
        <motion.nav
            variants={hidenav}
            animate={hidden ? "hidden" : "visible"}
            className={styles.nav}
        >
            <div className={styles.navbar}>
                <div className={styles.brand}>
                    <Link href="/">
                        <Image
                            src="/am.svg"
                            alt="logo"
                            width={70}
                            height={30}
                            priority={true}
                        />
                    </Link>
                </div>
                <div
                    onClick={() => {
                        setIsActive(!isActive);
                    }}
                    className={styles.menu}
                >
                    <div
                        className={`${styles.burger} ${
                            isActive ? styles.burgerActive : ""
                        }`}
                    >
                        <span></span>
                    </div>
                </div>
            </div>
            <motion.div
                variants={background}
                initial="initial"
                animate={isActive ? "open" : "closed"}
                className={styles.background}
            ></motion.div>
            <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
        </motion.nav>
    );
}
