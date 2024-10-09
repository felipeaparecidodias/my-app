import { useState } from 'react';
import './CadastroUser.css';

function CadastroUser(){
    const [email, SetEmail] = useState('')
    console.log(email)

    async function salvar(){
        let api= await fetch("https://viacep.com.br/ws/"+email+"/json/");

        let resposta= await api.json();

        if(api.ok){
            console.log(resposta)
            return 
        }
        console.log(resposta);
    }

    return(
        <div id="formulario">
            <form>
                <h2>Cadastra-se</h2>
                <label htmlfor='nome'>Nome</label>
                <input type='text' name='nome' id='nome'/>

                <label htmlfor='email'>Email</label>
                <input 
                type='text' 
                name='email' 
                id='email'
                value={email}
                onChange={(e)=> SetEmail(e.target.value)}
                />

                <label htmlfor='cpf_cnpj'>CPF / CNPJ</label>
                <input type='text' name='cpf_cnpj' id='cpf_cnpj'/>

                <label htmlfor='senha'>Senha</label>
                <input type='password' name='senha' id='senha'/>

                <input onClick={salvar} type='button' value="Cadastra-se"/>
               
               
            </form>
        </div>
    )

}

export default CadastroUser;
