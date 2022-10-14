import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    // declarando estados na aplicação
    const [listaProfessores, setListaProfessores] = useState<Professor[]>([]);
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [professorSelecionado, setProfessorSelecionado] = useState<Professor | null>(null);
    const [mensagem, setMensagem] = useState('');

    // SE NÃO PASSAR PARAMETROS NO ARRAY SÓ VAI EXECUTAR A FUNÇÃO UMA VEZ
    useEffect(() => {
        ApiService.get('/professores').then((resposta)=>{
            setListaProfessores(resposta.data);
        })
    }, []);

    // TODA VEZ QUE MUDAR PROFESSOR SELECIONADO CHAMARÁ A FUNÇÃO DE LIMPAR FORMULÁRIO
    useEffect(()=>{
        limparFormulario();
    }, [professorSelecionado]) 

    function marcarAula(){
        if (professorSelecionado !== null){
            if (validarDadosAula()){
                ApiService.post('/professores/'+ professorSelecionado.id +'/aulas', {
                    nome,
                    email
                }).then(()=> {
                    setProfessorSelecionado(null);
                    setMensagem('Cadastrado com sucesso');
                }).catch((error) =>{
                    setMensagem(error.response?.data.message);
                })
            } else {
                setMensagem('preencha os dados corretamente');
            }
        }
    }

    function validarDadosAula(){
        return nome.length > 0 && email.length > 0;
    }

    function limparFormulario(){
        setNome('');
        setEmail('');
    }

    return {
        listaProfessores,
        nome,
        setNome,
        email,
        setEmail,
        professorSelecionado,
        setProfessorSelecionado,
        marcarAula,
        mensagem,
        setMensagem
    }
}