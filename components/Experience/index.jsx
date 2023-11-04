"use client";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import LiIcon from "./icon";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position}&nbsp;<Link href={companyLink}>@{company}</Link>
                </h3>
                <span className="capitalize font-medium text-dark/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm">{work}</p>
            </motion.div>
        </li>
    );
};

export default function Experience() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"],
    });

    return (
        <div className="my-64">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-2xl md:mb-16">
                Experience
            </h2>
            <div
                ref={ref}
                className="w-[75%] mx-auto relative lg:w-[90%] md:w-full"
            >
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className="absolute left-9 top-0 w-[4px] h-full bg-black origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://asmit-v2.vercel.app/"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://asmit-v2.vercel.app/"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://asmit-v2.vercel.app/"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://asmit-v2.vercel.app/"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                    <Details
                        position="Software Engineer"
                        company="Google"
                        companyLink="https://asmit-v2.vercel.app/"
                        time="2022-Present"
                        address="Mountain View, CA"
                        work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
                    />
                </ul>
            </div>
        </div>
    );
}
