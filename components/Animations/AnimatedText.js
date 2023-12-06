"use client";
import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Word = styled(motion.span)`
    display: inline-block;
    margin-right: 0.25em;
    white-space: nowrap;
`;

export default function AnimatedText({ content }) {
    // Trigger when in view
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
    const wordAnimation = {
        hidden: {
            opacity: 0,
            y: `2em`,
        },
        visible: {
            opacity: 1,
            y: `0em`,
            transition: {
                duration: 0.8,
                ease: [0.5, 0.75, 0.4, 0.9],
            },
        },
    };

    return (
        <span aria-label={content} role="paragraph">
            {content.split(" ").map((word, index) => {
                return (
                    <Word
                        ref={ref}
                        aria-hidden="true"
                        key={index}
                        initial="hidden"
                        animate={ctrls}
                        variants={wordAnimation}
                        transition={{
                            delayChildren: index * 0.25,
                            staggerChildren: 0.05,
                        }}
                    >
                        {word}
                    </Word>
                );
            })}
        </span>
    );
}
