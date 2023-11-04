"use client";
import { motion, useScroll } from "framer-motion";

export default function LiIcon({ reference }) {
    const { scrollYProgress } = useScroll({
        target: reference,
        offset: ["center end", "center center"],
    });

    return (
        <div>
            <figure className="absolute left-0 stroke-black">
                <svg
                    className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
                    width="75"
                    height="75"
                    viewBox="0 0 100 100"
                >
                    <circle
                        cx="75"
                        cy="50"
                        r="20"
                        className="stroke-1 fill-none stroke-slate-700"
                    />
                    <motion.circle
                        cx="75"
                        cy="50"
                        r="20"
                        className="stroke-[5px] fill-white"
                        style={{
                            pathLength: scrollYProgress,
                        }}
                    />
                    <circle
                        cx="75"
                        cy="50"
                        r="10"
                        className="stroke-1 fill-black animate-pulse"
                    />
                </svg>
            </figure>
        </div>
    );
}
