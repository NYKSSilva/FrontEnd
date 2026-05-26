import styles from './styles.module.css';
import { Container } from '../components/Container';
import { InputPadrao } from '../components/inputPadrao';
import { Pencil, X } from 'lucide-react'

export interface Curso {
    id: string;
    nome: string;
    periodo: string;
}

interface listaCursosProps {
    cursos: Curso[];
    aoEditar: (curso: Curso) => void;
    aoExcluir: (id: string) => void;
}

export function ListaCurso({ cursos, aoEditar, aoExcluir }: listaCursosProps) {
    return (
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
                            {cursos.map((curso) => (
                                <tr key={curso.id}>
                                    <td>{curso.nome}</td>
                                    <td>{curso.periodo}</td>
                                    <button className={styles.actionButton} title="Editar" onClick={() => aoEditar(curso)}>
                                        <span><Pencil size={18} /></span>
                                    </button>
                                    <button className={styles.actionButton} title="Excluir" onClick={() => aoExcluir(curso.id)}>
                                        <span><X size={18} /></span>
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