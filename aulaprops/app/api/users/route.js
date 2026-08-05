import {NextResponse} from "next/server";

import sqlite3 from 'sqlite3'

import {open} from 'sqlite'

import path from "path";

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