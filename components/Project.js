import styles from "../styles/Project.module.scss"
import Image from "next/image"
export function Project({name, thumbnail, link, description}) {
    return <div className={styles.project} onClick={() => {
        window.open(link, "_blank")
        }}>

        <div className={styles.project__details}>

            <div>

                <p className={styles.project__details__name}> {name}</p>
                <p className={styles.project__details__description}>{description}</p>
            </div>
        
            <svg width="20" height="20" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 3H29V10M27.5 4.5L20 12M17 5H8C7.20435 5 6.44129 5.31607 5.87868 5.87868C5.31607 6.44129 5 7.20435 5 8V24C5 24.7956 5.31607 25.5587 5.87868 26.1213C6.44129 26.6839 7.20435 27 8 27H24C24.7956 27 25.5587 26.6839 26.1213 26.1213C26.6839 25.5587 27 24.7956 27 24V15" stroke="whitesmoke" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

        </div>

        <img className={styles.project__thumbnail} src={thumbnail}></img>
    </div>
}