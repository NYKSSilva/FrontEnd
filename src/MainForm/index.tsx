import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import { InputPadrao } from '../components/inputPadrao';
import { BotaoPadrao } from '../components/BotaoPadrao';

interface DadosCurso{
    nomeCurso: string;
    periodo: string;
    cursoEmEdicao: any|null;
}
interface MainFormProps{
    aoAdicionar: (curso:any) => void;
    aoAtualizar: (curso:any) => void;

}

export function MainForm({aoAdicionar, aoAtualizar, cursoEmEdicao}
    :MainFormProps){
        const [DadosCurso, setDadosCurso]=useState<DadosCurso>({
            nomeCurso:'',
            periodo:'',
        })
        useEffect(()=>{
            if(cursoEmEdicao){
                setDadosCurso({
                    nomeCurso: cursoEmEdicao.nome,
                     periodoCurso: cursoEmEdicao.periodo
                });
            }else{
                setDadosCurso({nomeCurso:'', periodo:''});
            }
        },[cursoEmEdicao])

        const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement| HTMLSelectElement>)=>{
             setDadosCurso({
            ...DadosCurso,
            [e.target.name]: e.target.value,

            });
        }

    return(
        <>
        <h1>main form</h1>
        </>
    )
}