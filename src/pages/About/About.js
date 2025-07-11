import styles from './About.module.css';

export default function AboutContent() {
    return (
        <div className={styles.container}>
            <div>
                <p>left sidebar</p>
                {/* name, Full-stack dev, email, location, fulltime, "download cv btn" */}
            </div>
            <div>
                <p>main about me blurb</p>
            </div>
        </div>
    );
}