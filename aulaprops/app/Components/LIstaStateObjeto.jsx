"use client"


import { useState , useRef} from "react"
export default function ListaState(){
    const [nome, setNome] = useState([])

    const ValorNome = useRef(null)
    const ValorEmail = useRef(null)

    function Adicionar(){
        const email = ValorEmail.current.value
        const nomes = ValorNome.current.value

        setNome([...nome, {nomes , email}])
        
    }

    return(
        <>
        <div>
            <h1>Digite seu nome</h1>
            <input type="text" placeholder="Digite seu nome" ref={ValorNome} />
            <input type="text" placeholder="Digite seu email" ref={ValorEmail} />
            <button onClick={Adicionar}>Enviar</button>
        </div>

        {nome.map ((Nomes)=>{
            return (
            <li key={Nomes.nomes}>
            <h1>{Nomes.nomes}</h1>
            <h2>{Nomes.email}</h2>

            </li>  

            )
        })}
        </>
    )
}