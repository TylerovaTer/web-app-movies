import { ButtonHTMLAttributes } from "react"
import styles from "./button.module.css"

interface PropTypes extends ButtonHTMLAttributes<HTMLButtonElement> {
    handleSorting: () => void
    latest?: boolean
}

export const SortButton=({
	 handleSorting, latest,...props
}: PropTypes)=> {
	return (
		<div className={styles.field}
        onClick={handleSorting}>
			<button
				className={styles.button}
				{...props}
			>
				<span className={styles.text}>{latest? "Sort it ⬇" : "Sort it ⬆"}</span>
			</button>
		</div>
	)
}
