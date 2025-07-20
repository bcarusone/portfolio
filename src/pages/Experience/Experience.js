import { Timeline, TimelineDot, TimelineItem, TimelineContent, TimelineConnector, TimelineSeparator } from '@mui/lab';
import styles from './Experience.module.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import { Typography, Chip } from '@mui/material';

export default function ExperienceContent({data}) {
    return (
        <div className={styles.container}>
            <Timeline>
                {data.employment.map(job => (
                    <TimelineItem key={job.employer}>
                        <TimelineSeparator>
                            <TimelineDot>
                                <WorkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography>
                                {job.title}
                            </Typography>
                            <Typography>
                                {job.employer}, {job.location}
                            </Typography>
                            <Typography>
                                {job.startDate} - {job.endDate}
                            </Typography>
                            <Typography>
                                {job.skills.map(skill => (
                                    <Chip label={skill} size='small'/>
                                ))}
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                ))}
                <TimelineItem key={data.education.schoolName}>
                    <TimelineSeparator>
                        <TimelineDot>
                            <SchoolIcon />
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography>
                            {data.education.degree}
                        </Typography>
                        <Typography>
                            {data.education.schoolName}, {data.education.location}
                        </Typography>
                        <Typography>
                            {data.education.startDate} - {data.education.endDate}
                        </Typography>
                            <Typography>
                                {data.education.skills.map(skill => (
                                    <Chip label={skill} size='small'/>
                                ))}
                            </Typography>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}