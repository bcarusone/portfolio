import styles from './Works.module.css';

export default function WorksContent() {
    return (
        <div className={styles.container}>
            <div>
                <p>RapidCap</p>
            </div>
            <div>
                <p>Convert HTML</p>
            </div>
            <div>
                <p>MyRF</p>
            </div>
            <div>
                <p>Portfolio Site</p>
            </div>
            <div>
                <p>Engineering Tool</p>
            </div>
            <div>
                <p>Mobile App - coming soon!</p>
            </div>
        </div>
    );
}