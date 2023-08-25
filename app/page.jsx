import styles from "./page.module.css";
import Header from "@/components/Header";
import Gallery from "@/components/Gallery";
import About from "@/components/About";

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Gallery />
            <About />
        </main>
    );
}
