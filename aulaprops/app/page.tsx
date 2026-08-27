"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  const [erro, setErro] = useState("")

  async function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    setErro("");

    const resposta = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, senha })
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      setErro(dados.mensagem || "Não foi possível fazer login");
      return;
    }

    router.push("/dashboard")
    router.refresh()
  }

  return (
    <>
      <div className="flex flex-col justify-center bg-blue-800">
        <form className="bg-white p-8 rounded-xl" onSubmit={handleSubmit}>

          <h1>Entrar no sistema </h1>

          {erro && <p className="text-red-600">{erro}</p>}

          <input type="email" placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input type="password" placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>

        </form>
      </div>
    </>
  );
}
