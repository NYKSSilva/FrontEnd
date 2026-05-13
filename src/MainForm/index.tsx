/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from './styles.module.css';
import { useState, useEffect } from 'react';
import { Container } from '../components/Container';
import { InputPadrao } from '../components/inputPadrao';
import { BotaoPadrao } from '../components/BotaoPadrao';

interface DadosCurso {
    nomeCurso: string;
    periodo: string;
}
interface MainFormProps {
    aoAdicionar: (curso: any) => void;
    aoAtualizar: (curso: any) => void;
    cursoEmEdicao: any | null;


}

export function MainForm({ aoAdicionar, aoAtualizar, cursoEmEdicao }
    : MainFormProps) {
    const [DadosCurso, setDadosCurso] = useState<DadosCurso>({
        nomeCurso: '',
        periodo: '',

    })
    useEffect(() => {
        if (cursoEmEdicao) {
            setDadosCurso({
                nomeCurso: cursoEmEdicao.nome,
                periodo: cursoEmEdicao.periodo
            });
        } else {
            setDadosCurso({ nomeCurso: '', periodo: '' });
        }
    }, [cursoEmEdicao])

    const lidarComMudanca = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setDadosCurso({
            ...DadosCurso,
            [e.target.name]: e.target.value,

        });
    };

    const cadastrarCurso = (e: any) => {
        e.preventDefault();
        if (cursoEmEdicao) {
            const cursoAtualizado = {
                id: cursoEmEdicao.id,
                nome: DadosCurso.nomeCurso,
                periodo: DadosCurso.periodo
            };
            console.log("Alteração em formato JSON :\n", JSON.stringify(cursoAtualizado, null, 2));
            aoAtualizar(cursoAtualizado)

        } else {
            const cursoNovo = {
                id: "",
                nome: DadosCurso.nomeCurso,
                periodo: DadosCurso.periodo
            };
            console.log("Inclusão em formato JSON :\n", JSON.stringify(cursoNovo, null, 2));
            aoAdicionar(cursoNovo)

        }
        setDadosCurso({ nomeCurso: "", periodo: "" })

    }

    return (
        <>
            <Container>
                <section className={styles.formularioContainer}>
                    <h2 className={styles.titulo}>
                        {cursoEmEdicao ? 'Editar Curso' : 'Cadastrar Novo Curso'}
                    </h2>
                    <form onSubmit={cadastrarCurso}>
                        <div className={styles.pularLinha}>
                            <label htmlFor="nomeCurso" className={styles.label}>Nome do curso</label>
                            <InputPadrao
                                type="text"
                                id="nomeCurso"
                                name="nomeCurso"
                                placeholder="Ex: Desenvolvimento de Sistemas"
                                value={DadosCurso.nomeCurso}
                                onChange={lidarComMudanca}
                                required
                            />
                        </div>
                        <div className={styles.pularLinha}>
                            <label htmlFor="periodo" className={styles.label}
                            >Periodo</label>
                            <select
                            className={styles.estiloSelect}
                            
                                id="periodo"
                                name="periodo"
                                value={DadosCurso.periodo}
                                onChange={lidarComMudanca}
                                required
                            >
                                <option value="">Selecione um periodo</option>
                                <option value="matutino">Matutino</option>
                                <option value="vespertino">Vespertino</option>
                                <option value="noturno">Noturno</option>
                                <option value="integral">Integral</option>
                            </select>
                            
                        </div>
                        <div className={styles.alinharBotao}>
                            <BotaoPadrao type='submit'>
                                {cursoEmEdicao? 'Salvar Alteração':'Inserir Curso'}
                            </BotaoPadrao>
                        </div>
                    </form>
                </section>

            </Container>
        </>
    )
}