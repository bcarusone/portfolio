import styles from './Home.module.css';

export default function HomeContent() {
    return (
        <div className={styles.container}>
            <h1>Hi, I'm Brittany</h1>
            <div>
                <span>Code artist at heart. </span>
                <span>Full-stack in practice.</span>
            </div>
        </div>
    );
}