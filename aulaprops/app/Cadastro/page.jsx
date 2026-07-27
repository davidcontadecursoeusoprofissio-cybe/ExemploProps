"use client";
import { useState, useRef } from "react";
export default function CadastroLogin() {
// TODO 1: crie aqui o state da lista de usuários cadastrados
// (deve começar como um array vazio)

// TODO 2: crie as refs dos inputs de e-mail e senha

// TODO 3: implemente a função que adiciona um novo usuário à lista
const [cadastro, setCadastro] = useState([])

const ValorNome = useRef(null)
const ValorEmail = useRef(null)
const ValorSenha = useRef(null)



function adicionarUsuario(){

    const Nome = ValorNome.current.value
    const Email = ValorEmail.current.value
    const Senha = ValorSenha.current.value

    setCadastro ([... cadastro,{Nome,Email,Senha}])

}




return (
<div style={{ padding: 24, fontFamily: "sans-serif" }}>
<h2>Cadastro de Login</h2>
<input 
ref={ValorNome}
type="text"
placeholder="Nome" 
style={{ display: "block", marginBottom: 8, padding: 8 }}

/>
<input
ref={ValorEmail}
type="text"
placeholder="E-mail"
style={{ display: "block", marginBottom: 8, padding: 8 }}
/>
<input
ref={ValorSenha}
type="password"
placeholder="Senha"
style={{ display: "block", marginBottom: 8, padding: 8 }}
/>
<button onClick={adicionarUsuario}>Cadastrar</button>
<h3>Usuários cadastrados:</h3>
<ul>
{cadastro.map((usuario, indice) => { 
return(
<li key={indice}>
<h1>{usuario.Nome}</h1>
<h2>{usuario.Email}</h2>
<p>{usuario.Senha}</p>
</li>

)
})}
</ul>
</div>
);
}