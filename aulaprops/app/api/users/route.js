import {NextResponse} from "next/server";

import sqlite3 from 'sqlite3'

import {open} from 'sqlite'

import path from "path";
//Função feita para criar a conecxão com o banco de dados
async function abrirBanco(){
    const db = await open({
        filename: path.join(process.cwd(),'database.db'),
        driver: sqlite3.Database

    });
await db.exec(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            idade INTEGER NOT NULL,
            foto TEXT
        )
    `);
return db
}

export async function GET(){
    const db = await abrirBanco();

    const usuarios = await db.all('SELECT * FROM users')

    return NextResponse.json(usuarios)
}

//Função feita para cadastra um novo usuario no banco de dados
export async function POST(request){
    //Valor transfomado em json
    const dados = await request.json();

    //json transformado em objeto
    const { nome, idade, foto }=dados;

    //Chamando a função para abrir o meu banco
    const db = await abrirBanco();

    //executando o comando SQL(Liíguagem que liga e manipula o banco de dados) -INSERT INTO Table
    const resultado = await db.run(
        `INSERT INTO users (nome, idade, foto)VALUES (?,?,?)`,
        [nome, idade, foto ?? null]

    );

    //Retorna o usuario que acabou de ser criado
    const usuarioCriado = await db.get(
        `SELECT * FROM users WHERE id=?`,
        [resultado.lastID]
    );

    return NextResponse.json(usuarioCriado, {status: 201})
}
