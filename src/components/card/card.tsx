import { FilmType } from "@/data/types"
import styles from './card.module.css'

type PropTypes = {
    film: FilmType
}

export const Card = ({ film }: PropTypes) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.poster}>
                <img src={film.poster} alt={film.title} />
            </div>
            <div className={styles.content}>
                <h2 className={styles.headline}>{film.title}</h2>
                <div className={styles.desc}>{film.description}</div>
                <div className={styles.characters}>
                    <p>CHARACTERS: </p>
                    {film.main_characters.map((character) => (
                        <p key={character}>{` ${character},`}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}