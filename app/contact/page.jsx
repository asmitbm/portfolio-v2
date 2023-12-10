"use client";
import { useEffect } from "react";
import ContactForm from "@/components/ContactForm";
import { ContactCard } from "@/components/ContactCard";
import AnimatedTitle from "@/components/Animations/AnimatedTitle";
import AnimatedText from "@/components/Animations/AnimatedText";
import styles from "./page.module.css";

export default function Contact() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={styles.background_image}>
            <div className={styles.main}>
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
                    <div className={styles.contact_card}>
                        <ContactCard />
                    </div>
                    <div className={styles.contact_form}>
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
