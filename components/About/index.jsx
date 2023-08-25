import styles from "./styles.module.css";

export default function About() {
    return (
        <div className={styles.aboutme}>
            <div className={styles.aboutme_text}>
                <div className={styles.aboutme_text_heading}>
                    <h1>Nice to meet you :&#41;</h1>
                </div>
                <div className={styles.aboutme_text_line}>
                    <h4>About Me</h4>
                </div>
            </div>
            <div className={styles.aboutme_photo}></div>
        </div>
    );
}
