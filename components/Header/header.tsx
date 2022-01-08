
import styles from './styles.module.scss'
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
export function HeaderPortfolio() {
    return (
        <header className={styles.header}>
            <div>
                <p ><strong><MdArrowBackIosNew /><MdArrowForwardIos />Programador</strong></p>
                <ul >
                    <li><a href="#what">Inicio</a></li>
                    <li><a href="#why">Sobre</a></li>
                    <li><a href="#how">Projetos</a></li>
                </ul>
            </div>
        </header>
    )
}