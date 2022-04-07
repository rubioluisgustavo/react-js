import React from 'react';
import './login.css';

function Login() {
    return (
        <div className='login-content d-flex align-items-center'>
            <main className="form-signin mx-auto">
                <form>
                    <h1 className='h1h1 text-center text-white'>Login</h1>

                    <input type="email" className="form-control my-2" id="floatingInput" placeholder="react@gmail.com"/>
                    <input type="password" className="form-control my-2" id="floatingPassword" placeholder="******" />

                    <button className="w-100 btn btn-lg btn-login" type="submit">Entrar</button>
                    <div className='text-center msg-login text-white my-4'>
                        <span>Uau! Você está <strong>conectado!</strong>&#128512;</span>
                        <span>Ops! E-mail ou senha <strong>incorretos!</strong>&#128552;</span>
                    </div>
                    <div className='text-center opcoes-login'>
                        <a href="" className='mx-2'>Recuperar Senha</a>
                        <a href="" className='mx-2'>Cadastre-se</a>
                    </div>
                    <p className="text-center mt-5 mb-3 ano">&copy; 1996-2022 - por Luis Rubio</p>
                </form>
            </main>
        </div>
    )
}

export default Login;