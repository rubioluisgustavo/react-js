import React, { useState } from 'react';
import './usuario-novo.css';
import firebase from '../../config/./firebase';
import 'firebase/auth';

function NovoUsuario() {
    return (
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='h3 mb-3 text-black font-weight-bold'>Cadastro</h1>
                <input type="email" className='form-control my-2' placeholder='Email' />
                <input type="password" className='form-control my-2' placeholder='Senha' />
                <button type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Cadastrar</button>
                <div className='text-center msg-login my-4'>
                    {msgTipo === 'sucesso' && <span>Você está <strong>conectado!</strong> &#128512;</span>}
                    {msgTipo === 'erro' && <span>E-mail ou senha <strong>inválidos!</strong> &#128552;</span>}
                </div>
            </form>
        </div>
    )
}

export default NovoUsuario;