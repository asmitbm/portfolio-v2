import styles from './styles.module.css'

export default function Header() {
    return (
        <div id="header" className={styles.header}>
            <div className={styles.header_name}>
                <div className={styles.header_hello}>
                    <h1>Hello</h1>
                </div>
                <div className={styles.header_asmit}>
                    <h1>I&apos;m Asmit.</h1>
                </div>
            </div>
            <div className={styles.header_para}>
                <p>An open source enthusiast and a product designer. Available for special projects.</p>
            </div>
        </div>
    )
}