import type {ReactNode} from 'react'
import styles from './styles.module.css'
interface ContainerProps{
    children:ReactNode;
}

export function Container({children}:ContainerProps){
    return(
        <>
        <div className = {styles.container}>
            {children}
        </div>
        <h1>Ola do container</h1>
        </>
    )
}