"use client";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ContactForm from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import Image from "next/image";
import styles from "./page.module.css";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
        <div className={styles.background_image}>
            <motion.div
                initial="hidden"
                ref={ref}
                animate={ctrls}
                variants={AnimationUp}
                className={styles.main}
            >
                <div className={styles.header}>
                    <div className={styles.header_name}>
                        <h1>
                            <AnimatedTitle title="Contact." />
                        </h1>
                    </div>
                    <div className={styles.header_para}>
                        <p>
                            <AnimatedText content="Send me a message." />
                        </p>
                    </div>
                </div>
                <div className={styles.contact}>
                    <div className={styles.contact_image}>
                        <div className={styles.contact_card}>
                            <ContactCard />
                        </div>
                        <div className={styles.random_image}>
                            <p>
                                {" "}
                                <AnimatedText content="Random images from Unsplash" />
                            </p>
                        </div>
                    </div>
                    <div className={styles.contactform}>
                        <ContactForm />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
