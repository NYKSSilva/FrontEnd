/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import { InputPadrao } from '../components/inputPadrao';
import {Pencil,x} from 'lucide-react'
interface Curso {
    id:string;
    nome: string;
    periodo: string;
}
interface listaCursosProps {
    curso:Curso[];
    aoEditar:(curso:Curso)=> void;
    aoExcluir: (id:string)=>void;


}
export function listaCursos({ curso, aoEditar, aoExcluir }: listaCursosProps) {
    return(
        <>
        <Container>
            <section className={styles.listaContainer}>
                <h2 className={styles.titulo}>Lista de cursos</h2>
                <div className={styles.buscaContainer}>
                    <InputPadrao
                    type="text"
                    placeholder='Buscar curso pelo nome'
                    />
                </div>
                <table className={styles.tabela}>
                    <thead>
                        <tr>
                            <th>Curso</th>
                            <th>Periodo</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {curso.map((curso)=>(
                            <tr key = {curso.nome}>
                                <td>{curso.periodo}</td>
                                <button
                                className={styles.actionButton}
                                title='Editar'
                                onClick={()=>aoEditar(curso)}
                                >
                                    <span><Pencil size={18}/></span>
                                </button>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Container>
        </>
    )

    }