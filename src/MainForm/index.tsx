import { Container } from '../components/Container';
import { InputPadrao } from '../components/inputPadrao';
import { BotaoPadrao } from '../components/BotaoPadrao';
import { useState, useEffect } from 'react';
import styles from './styles.module.css'

interface DadosCurso{
    nomecurso: string;
    periodo: string;
} 
interface MainFormProps{
    aoAdicionar: (curso:any) => void;
    aoAtualizar: (curso:any) => void;
    cursoEmEdicao: (any|null);
}

export function MainForm({aoAdicionar, aoAtualizar, cursoEmEdicao}:MainFormProps){

    const [DadosCurso, setDadosCurso] = useState<DadosCurso>({nomecurso : '', periodo :''});
    useEffect(()=>{
        if(cursoEmEdicao) {
                setDadosCurso({
                nomecurso: cursoEmEdicao.nome,
                periodo: cursoEmEdicao.periodo
            });
        }else{
                setDadosCurso({
                    nomecurso : "",
                    periodo : ""
                });
            }
    },[cursoEmEdicao]);
    const lidarComMudanca = (e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement>)=>{
        setDadosCurso({
            ...DadosCurso, 
            [e.target.name]: e.target.value
        });
    }


    const cadastrarCurso = (e:any)=>{
        e.preventDefault();
        if (cursoEmEdicao){
            const cursoAtualizado = {
                id:cursoEmEdicao.id,
                nome:DadosCurso.nomecurso,
                periodo:DadosCurso.periodo
            }
            console.log("Alteraçãoo em formato JSON:\n", JSON.stringify(cursoAtualizado,null,2));
            aoAtualizar(cursoAtualizado);
        }else{
           const cursoNovo = {
                id:"",
                nome: DadosCurso.nomecurso,
                periodo: DadosCurso.periodo,
            }
            console.log("inclusao em formato JSON:\n", JSON.stringify(cursoNovo,null,2));
            aoAdicionar(cursoNovo)
        }
    }

    return (
        <>
            <Container>
                <section className={styles.formularioContainer}>  
                    <h2 className = {styles.titulo}>
                        Cadastrar curso
                        {cursoEmEdicao? 'Editar Curso': 'Alterar Curso'} 
                    </h2>
                    <form //onSubmit = {cadastrarCurso}
                    >Olá do form</form>
                    <div className={styles.pularLinha}>
                        <label htmlFor='nomeCurso' className={styles.label}>Nome curso:</label>
                        <InputPadrao
                        type='text'
                        id='nomecurso'
                        name='nomecurso'
                        placeholder='Ex: DS'
                        value={DadosCurso.nomecurso}
                        onChange={lidarComMudanca}
                        required
                        >
                        </InputPadrao>
                    </div>
                    <div className={styles.pularLinha}>
                        <label htmlFor="periodo" className={styles.label}>Periodo</label>
                        <select name="periodo" id="periodo"
                        value={DadosCurso.periodo}
                        onChange={lidarComMudanca}
                        required
                        className={styles.estiloSelect}
                        >
                            <option value="">Selecione o periodo</option>
                            <option value="Matutino">Matutino</option>
                            <option value="Vespertino">Vespertino</option>
                            <option value="Noturno">Noturno</option>
                            <option value="Integral">Integral</option>

                        </select>
                    </div>
                    <div className={styles.alinharBotao}>
                        <BotaoPadrao type='submit'>
                            {/* {cursoEmEdicao? 'Salva alteração': 'Inserir curso'} */}
                            Botao teste
                        </BotaoPadrao>
                    </div>
                    </section>
            </Container>
        </>
    )
}