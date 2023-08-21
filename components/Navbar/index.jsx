'use client';
import styles from './styles.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { opacity, background } from './anim';
import Nav from './nav';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        setIsActive(false);
    }, [pathname])

    return (
        <div id="navbar" className={styles.header}>
            <div className={styles.bar}>
                <div className={styles.brand}>
                    <Link href="/"><Image src="/am.svg" alt="logo" width={70} height={30} /></Link>
                </div>
                <div onClick={() => { setIsActive(!isActive) }} className={styles.menu}>
                    <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
                    <div className={styles.label}>
                        <motion.p variants={opacity} animate={!isActive ? "open" : "closed"}>Menu</motion.p>
                        <motion.p variants={opacity} animate={isActive ? "open" : "closed"}>Close</motion.p>
                    </div>
                </div>
            </div>
            <motion.div variants={background} initial="initial" animate={isActive ? "open" : "closed"} className={styles.background}></motion.div>
            <AnimatePresence mode="wait">
                {isActive && <Nav />}
            </AnimatePresence>
        </div>
    )
}