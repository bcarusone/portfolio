import { Button, Typography } from '@mui/material';
import styles from './About.module.css';
import DownloadIcon from '@mui/icons-material/Download';

export default function AboutContent({data}) {
    const handleDownload = () => {
        const pdfUrl = "./resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Carusone, Brittany Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className={styles.container}>
            <div className={styles.overview}>
                {/* add image here */}
                <Typography>
                    {data.name}
                </Typography>
                <Typography>
                    {data.title}
                </Typography>
                <Typography>
                    {data.location}
                </Typography>
                <Typography>
                    {data.email}
                </Typography>
                <Button 
                    variant='contained' 
                    href="/resume.pdf" 
                    startIcon={<DownloadIcon />}
                    onClick={handleDownload}
                >
                    Download Resume
                </Button>
            </div>
            <div className={styles.blurb}>
                <Typography>
                    {data.blurb}
                </Typography>
            </div>
        </div>
    );
}