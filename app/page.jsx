import styles from './page.module.css';
import Header from '@/components/Header';

export default function Home() {
    return (
        <main className={styles.main}>
            <Header />
        </main>
    )
}