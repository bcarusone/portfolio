import { Button, TextField } from '@mui/material';
import styles from './Contact.module.css';

export default function ContactContent() {
    return (
        <div >
            <p>contact blurb</p>
            <div className={styles.contact}>
                <TextField id="name" label="Name" variant="outlined" className={styles.left}/>
                <TextField id="email" label="Email" variant="outlined" className={styles.right}/>
                <TextField id="message" label="Message" variant="outlined" multiline rows={4} className={styles.middle}/>
                <Button variant='contained' className={styles.center}>
                    Send message
                </Button>
            </div>
        </div>
    );
}