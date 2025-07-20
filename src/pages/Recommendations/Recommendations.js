import { Typography } from '@mui/material';
import styles from './Recommendations.module.css';

export default function RecommendationContent({data}) {
    return (
        <div className={styles.container}>
            {data.map(rec => (
                <div className={styles.section}>
                    <Typography>
                        {rec.firstName} {rec.lastInitial}, {rec.title}
                    </Typography>
                    <Typography>
                        {rec.message}
                    </Typography>
                </div>
            ))}
            {/* Ask Kyle and Gary for recc */}
        </div>
    );
}