import styles from "../styles/Experiment.module.scss"
import Image from "next/image"
export function Experiment({video_link}) {
    return <div className={styles.project}>
        <iframe  className={styles.project__iframe}
            src={video_link}>
        </iframe>
    </div>
}