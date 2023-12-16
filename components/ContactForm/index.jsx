"use client";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import styles from "./styles.module.css";

export default function ContactForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    if (loading) return toast.loading("Sending Message...");

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!data.name) {
            return toast.error("Please enter your name");
        }
        if (!data.email) {
            return toast.error("Please enter your email");
        }
        if (!data.subject) {
            return toast.error("Please enter a subject");
        }
        if (!data.message) {
            return toast.error("Please enter a message");
        }

        setLoading(true);
        const response = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (response.status === 200) {
            setData({});
            setLoading(false);
            toast.success(
                `Hey ${data.name}, your message was sent successfully! Check your inbox!`
            );
        } else {
            setData({});
            setLoading(false);
            toast.error(
                `Hey ${data.name}, your message wasn't delivered. Please try again later.`
            );
        }
    };

    return (
        <div id="contact" className={styles.contact_form}>
            <div className={styles.field_container}>
                <form onSubmit={sendEmail}>
                    <div className={styles.name_email}>
                        <div className={styles.boxes}>
                            <input
                                className={styles.inputs}
                                type="text"
                                required
                                placeholder="Name *"
                                value={data.name}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>
                        <div className={styles.boxes}>
                            <input
                                className={styles.inputs}
                                type="email"
                                required
                                placeholder="Email *"
                                value={data.email}
                                onChange={(e) =>
                                    setData({
                                        ...data,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className={styles.boxes}>
                        <input
                            className={styles.inputs}
                            type="text"
                            required
                            placeholder="Subject *"
                            value={data.subject}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    subject: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div
                        style={{ whiteSpace: "pre-wrap" }}
                        className={styles.boxes}
                    >
                        <textarea
                            className={styles.inputs}
                            rows="11"
                            required
                            placeholder="Message * (you will receive a copy of this in your inbox)"
                            value={data.message}
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    message: e.target.value,
                                })
                            }
                        ></textarea>
                    </div>
                    <motion.button
                        onClick={sendEmail}
                        whileTap={{ scale: 0.9 }}
                        className={styles.submit_button}
                    >
                        Send Message{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="48"
                            width="48"
                            viewBox="0 0 48 48"
                            alt="arrow-east icon"
                            name="arrow-east"
                            className="w-[1em] h-[1em] inline-block ml-2 text-[1.2em]"
                            aria-label="arrow-east"
                        >
                            <path
                                d="m30 38-2.1-2.1 10.4-10.4H4v-3h34.3L27.9 12.1 30 10l14 14Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                    </motion.button>
                </form>
            </div>
        </div>
    );
}
