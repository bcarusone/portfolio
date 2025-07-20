import ProjectCard from '../../components/ProjectCard/ProjectCard';
import styles from './Works.module.css';

export default function WorksContent({data}) {
    return ( 
        <div className={styles.container}>
            {data.map(project => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    tagline={project.tagline}
                    link={project.link}
                    linkTitle={project.linkTitle}
                />
            ))}
        </div>
    );
}