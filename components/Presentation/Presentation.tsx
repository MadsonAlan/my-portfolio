import styles from './styles.module.scss'
import fotoPerfil from '../../public/fotoDoPerfil.jpg'
import Image from 'next/image'
export function Presentation() {
    const textHeader = '<Olá, sou o Madson>'
    return (
        <div className={styles.presentationContainer}>
            <div className={styles.gridPresentationContainer}>
                <div>
                    <h1>{textHeader}</h1>
                    <h1>Desenvolvedor Web</h1>
                    <button>Meus Projetos</button>
                </div>
                <div />
                <div>
                    <Image src={fotoPerfil} alt="Foto do Perfil do Usuário" width={500} height={500} />
                </div>
            </div>
        </div>
    )
}