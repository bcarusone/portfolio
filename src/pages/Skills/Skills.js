import SkillCard from '../../components/SkillCard/SkillCard';
import styles from './Skills.module.css';

export default function SkillsContent({data}) {
    function capitalizeFirstLetter(val) {
        return String(val).charAt(0).toUpperCase() + String(val).slice(1);
    }

    return (
        <div className={styles.container}>
            {Object.entries(data).map(([categoryKey, items]) => (
                <SkillCard
                    key={categoryKey}
                    title={capitalizeFirstLetter(categoryKey)}
                    skillsList={items}
                />
            ))}
        </div>
    );
}