import React, { useState } from 'react';
import './login.css';
import firebase from '../../config/./firebase';
import 'firebase/auth';

function Login() {

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [msgTipo, setMsgTipo] = useState();

    function logar() {

        firebase.auth().signInWithEmailAndPassword(email, senha)

            .then(resultado => { setMsgTipo('sucesso'); })
            .catch(erro => { setMsgTipo('erro'); })
    }

    return (
        <div className='login-content d-flex align-items-center'>
            <main className="form-signin text-center mx-auto">
                <form>
                    <h1 className='h1h1 text-center text-white'>Login</h1>

                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="email form-control my-2" id="email" placeholder="react@gmail.com" />
                    <input onChange={(e) => setSenha(e.target.value)} type="password" className="senha form-control my-2" id="senha" placeholder="******" />

                    <button onClick={logar} className="w-100 btn btn-lg btn-login" type="button">Entrar</button>

                    <div className='text-center msg-login my-4'>
                        {msgTipo === 'sucesso' && <span>Você está <strong>conectado!</strong> &#128512;</span>}
                        {msgTipo === 'erro' && <span>E-mail ou senha <strong>inválidos!</strong> &#128552;</span>}
                    </div>

                </form>
            </main>
        </div>
    )
}

export default Login;