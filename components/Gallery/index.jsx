"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
    "6.webp",
    "7.webp",
    "8.webp",
    "9.webp",
    "10.webp",
    "11.webp",
    "12.webp",
];

export default function Gallery() {
    const gallery = useRef(null);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    const { scrollYProgress } = useScroll({
        target: gallery,
        offset: ["start end", "end start"],
    });
    const { height } = dimension;
    const y = useTransform(scrollYProgress, [1, 0], [0, height * 2]);
    const y2 = useTransform(scrollYProgress, [1, 0], [0, height * 3]);
    const y3 = useTransform(scrollYProgress, [1, 0], [0, height * 1.25]);
    const y4 = useTransform(scrollYProgress, [1, 0], [0, height * 3]);

    useEffect(() => {
        const lenis = new Lenis({
            smoothWheel: true,
            smoothTouch: true,
            syncTouch: true,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };

        const resize = () => {
            setDimension({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", resize);
        requestAnimationFrame(raf);
        resize();

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <main className={styles.main}>
            <div ref={gallery} className={styles.gallery}>
                <Column images={[images[0], images[1], images[2]]} y={y} />
                <Column images={[images[3], images[4], images[5]]} y={y2} />
                <Column images={[images[6], images[7], images[8]]} y={y3} />
                <Column images={[images[9], images[10], images[11]]} y={y4} />
            </div>
        </main>
    );
}

const Column = ({ images, y }) => {
    return (
        <motion.div className={styles.column} style={{ y }}>
            {images.map((src, i) => {
                return (
                    <div key={i} className={styles.imageContainer}>
                        <Image
                            src={`/gallery/${src}`}
                            alt="images of all the different artworks"
                            fill={true}
                            priority={true}
                            quality={60}
                        />
                    </div>
                );
            })}
        </motion.div>
    );
};
