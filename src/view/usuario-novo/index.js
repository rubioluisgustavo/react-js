import React, { useState } from 'react';
import './usuario-novo.css';
import firebase from '../../config/./firebase';
import 'firebase/auth';

function NovoUsuario() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();
    const [msg, setMsg] = useState();
    const [carregando, setCarregando] = useState();

    function cadastrar() {

        setCarregando(1);
        setMsgTipo(null);

        if (!email || !senha) {
            setCarregando(0);
            setMsgTipo('erro')
            setMsg('Você precisa informar o email e senha para fazer o cadastro!');
            return;
        }

        firebase.auth().createUserWithEmailAndPassword(email, senha)

            .then(resultado => {

                setCarregando(0);
                setMsgTipo('sucesso')
            })

            .catch(erro => {
                setCarregando(0);
                setMsgTipo('erro')

                switch (erro.message) {

                    case 'Password should be at least 6 characters':
                        setMsg('Mínimo de 6 caracteres para senha!');
                        break;
                    case 'The email address is badly formatted.':
                        setMsg('Formato do e-mail inválido!');
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

                <input onChange={(e) => setEmail(e.target.value)} type="email" className="email form-control my-2 w-20" id="email" placeholder="react@gmail.com" />
                <input onChange={(e) => setSenha(e.target.value)} type="password" className="senha form-control my-2" id="senha" placeholder="******" />
                
                {
                    carregando ?  <div class="spinner-border text-light" role="status"><span class="sr-only"></span></div>
                    : <button onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-3 btn-cadastro'>Cadastrar</button>
                }
                

                <div className='text-center msg-cad'>
                    {msgTipo === 'sucesso' && <span>Cadastrado com sucesso!</span>}
                    {msgTipo === 'erro' && <span>{msg}</span>}
                </div>
            </form>
        </div>
    )
}

export default NovoUsuario;