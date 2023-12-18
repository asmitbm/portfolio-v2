"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "@/components/Animations/AnimatedText";
import Stars from "./stars";
import styles from "./styles.module.css";

export const ContactCard = () => {
    return (
        <div>
            <AnimatedCard />
        </div>
    );
};

const AnimatedCard = () => {
    const [widthPercentage, setWidthPercentage] = useState(0);
    const cardRef = useRef(null);
    const [left, setLeft] = useState(0);
    const [localWidth, setLocalWidth] = useState(0);
    const [isMouseOver, setIsMouseOver] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            const { left, width: localWidth } =
                cardRef.current.getBoundingClientRect();
            setLeft(left);
            setLocalWidth(localWidth);
        }
    }, []);

    function mouseMoveHandler(event) {
        event.preventDefault();

        const { clientX } = event;
        if (cardRef.current) {
            const relativeX = clientX - left;
            setWidthPercentage((relativeX / localWidth) * 100);
        }
    }

    function mouseLeaveHandler() {
        setIsMouseOver(false);
        setWidthPercentage(0);
    }
    function mouseEnterHandler() {
        setIsMouseOver(true);
    }

    const rotateDeg = (widthPercentage - 50) * 0.1;
    return (
        <div
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            onMouseMove={mouseMoveHandler}
            ref={cardRef}
            className={styles.card}
        >
            <div className={styles.card_heading}>
                <h2>
                    <AnimatedText content="Let's Get in Touch!" />
                </h2>
            </div>
            <div className={styles.slide_container}>
                <motion.div
                    animate={
                        isMouseOver
                            ? {
                                  opacity: widthPercentage > 0 ? 1 : 0,
                                  clipPath: `inset(0 ${
                                      100 - widthPercentage
                                  }% 0 0)`,
                              }
                            : {
                                  clipPath: `inset(0 ${
                                      100 - widthPercentage
                                  }% 0 0)`,
                              }
                    }
                    transition={
                        isMouseOver ? { duration: 0 } : { duration: 0.4 }
                    }
                    className={styles.hover_text}
                >
                    <p>I&#39;ll Bring a Creative Touch To It.</p>
                </motion.div>
                <motion.div
                    animate={{
                        left: `${widthPercentage}%`,
                        rotate: `${rotateDeg}deg`,
                        opacity: widthPercentage > 0 ? 1 : 0,
                    }}
                    transition={
                        isMouseOver ? { duration: 0 } : { duration: 0.4 }
                    }
                    className={styles.slider}
                ></motion.div>

                <div className={styles.base_text}>
                    <p>Do you want to work with me?</p>
                    <Stars />
                </div>
            </div>
        </div>
    );
};
