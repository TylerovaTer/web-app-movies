import styles from "./header.module.css"

export const Header = () => {
    return (
        <div className={styles.header_wrapper}>
            <h1 className={styles.header_text}>Star Wars Films</h1>
        </div>
    )
}