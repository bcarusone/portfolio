import styles from './Skills.module.css';

export default function SkillsContent() {
    return (
        <div className={styles.container}>
            <div>
                <p>front end skills</p>
                {/* html, css, js, ts, react */}
            </div>
            <div>
                <p>back end skills</p>
                {/* python, flask, mysql, c++, c# */}
            </div>
            <div>
                <p>dev tool skills</p>
                {/* jenkins, github actions, aws, docker */}
            </div>
        </div>
    );
}