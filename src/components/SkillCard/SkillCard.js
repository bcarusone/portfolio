import { Card, CardHeader, CardContent, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import styles from './SkillCard.module.css';

export default function SkillCard({title, skillsList}) {
    return (
        <Card variant="outlined" className={styles.card}>
            <CardHeader title={title} />
            <CardContent>
                <List orientation="vertical">
                    {skillsList.map(skillInfo => (
                        <ListItem key={skillInfo.technology}>
                            <ListItemIcon  />
                            <ListItemText>
                                {skillInfo.technology}
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
            </CardContent>
        </Card>
    );
}