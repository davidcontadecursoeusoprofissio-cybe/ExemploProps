import {NextResponse} from "next/server";

const usuarioValido={
    email: "davidalarcon@gmail.com",
    senha: "246796"
}
 export async function POST(request) {
    const {email, senha} = await request.json();

    const credencialCorreta =email == usuarioValido.email && senha == usuarioValido.senha

    if(!credencialCorreta){
        return NextResponse.json(
            {mensagem: "email ou senha incorreto"},
            {status:401}
        )
    }
    const response = NextResponse.json({mensagem: "login efetuado com sucesso"});

    response.cookies.set("auth_token", "usuario-logado",{
        httpOnly:true,
        secure:process.env.NODE_ENV=="production",
        path:"/",
        maxAge:60*60*2
    });
    return response
    
}