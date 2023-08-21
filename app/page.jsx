import styles from './page.module.css';
import Header from '@/components/Header';
import Gallery from '@/components/Gallery';

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
            <Gallery />
        </main>
    )
}