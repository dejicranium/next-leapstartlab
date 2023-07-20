import styles from "../styles/Button.module.scss"
export function Button({text}) {
    return <button className={styles.button}>{text}</button>
}

