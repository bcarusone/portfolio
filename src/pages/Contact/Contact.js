import styles from './Contact.module.css';

export default function ContactContent() {
    return (
        <div className={styles.container}>
            <div>
                <p>contact blurb</p>
                <p>name</p>
                <p>email</p>
                <p>message</p>
                <p>send message button</p>
            </div>
        </div>
    );
}