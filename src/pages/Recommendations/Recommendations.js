import styles from './Recommendations.module.css';

export default function RecommendationContent({data}) {
    return (
        <div className={styles.container}>
            <div>
                <p>Nicole M.</p>
            </div>
            <div>
                <p>Chris S.</p>
            </div>
            <div>
                <p>Rowan L.</p>
            </div>
            {/* Ask Kyle and Gary for recc */}
        </div>
    );
}