import { Card, CardHeader, CardContent } from '@mui/material';
import styles from './ProjectCard.module.css';

export default function ProjectCard({title, tagline, linkTitle, link}) {
    return (
        <Card variant="outlined" className={styles.card}>
            <CardHeader title={title} />
            <CardContent>
                <div>{tagline}</div>
            </CardContent>
        </Card>
    );
}

// switch to grids!