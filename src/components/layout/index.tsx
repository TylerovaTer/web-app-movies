import { Header } from '../header';
import styles from './layout.module.css';

type PropTypes = {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: PropTypes) => {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.wrapper}>
                {children}
            </div>
        </div>
    )
}