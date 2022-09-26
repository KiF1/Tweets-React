import styles from './Header.module.css';
import igniteLogo from '../assets/Ignite_simbol.svg';
export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt="logo" />
            <strong>Iginite Feed</strong>
        </header>
    )
}