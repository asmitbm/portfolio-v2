import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.css";
import { blur, translate } from "../../anim";

export default function Body({ links, selectedLink, setSelectedLink }) {
    const getChars = (word) => {
        let chars = [];
        word.split("").forEach((char, i) => {
            chars.push(
                <motion.span
                    custom={[i * 0.02, (word.length - i) * 0.01]}
                    variants={translate}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    key={char + i}
                >
                    {char}
                </motion.span>
            );
        });
        return chars;
    };

    return (
        <div className={styles.navlinks}>
            {links.map((link, index) => {
                const { title, href, target } = link;
                return (
                    <Link key={`l_${index}`} href={href} target={target}>
                        <motion.p
                            onMouseOver={() => {
                                setSelectedLink({ isActive: true, index });
                            }}
                            onMouseLeave={() => {
                                setSelectedLink({ isActive: false, index });
                            }}
                            variants={blur}
                            animate={
                                selectedLink.isActive &&
                                selectedLink.index != index
                                    ? "open"
                                    : "closed"
                            }
                        >
                            {getChars(title)}
                        </motion.p>
                    </Link>
                );
            })}
        </div>
    );
}
