import React, { useState } from 'react';
import './usuario-novo.css';
import firebase from '../../config/./firebase';
import 'firebase/auth';

function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();

    function cadastrar() {
        setMsgTipo(null);

        if (!email || !senha) {
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro!');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)

            .then(resultado => { setMsgTipo('sucesso') })
            .catch(erro => {
                setMsgTipo('erro')
                switch (erro.message) {
                    case 'Password should be at least 6 characters':
                        setMsg('A senha deve ter no mínimo 6 caracteres!');
                        break;
                    case 'The email address is badly formatted.':
                        setMsg('Formato do e-mail digitado inválido!');
                        break;
                    case 'The email address is already in use by another account.':
                        setMsg('E-mail já cadastrado!')
                        break;
                    default:
                        setMsg('Não foi possível cadastrar. Tente novamente!');
                        break;
                }
            })
    }

    return (
        <div className='form-cadastro d-flex align-items-center'>
            <form className='text-center mx-auto'>
                <h1 className='h1h1 text-center text-white'>Cadastro</h1>

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="email form-control my-2" id="email" placeholder="react@gmail.com" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="senha form-control my-2" id="senha" placeholder="******" />

                <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-3 btn-cadastro'>Cadastrar</button>

                <div className='text-center msg-cad'>
                    {msgTipo === 'sucesso' && <span>Cadastrado com sucesso!</span>}
                    {msgTipo === 'erro' && <span>{msg}</span>}
                </div>
            </form>
        </div>
    )
}

export default NovoUsuario;