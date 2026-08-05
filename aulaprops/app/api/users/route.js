import {NextResponse} from "next/server";

import sqlite3 from 'sqlite'

import {open} from 'sqlite'

import path from "path";

async function abrirBanco(){
    return open({
        filename: path.json(process.cwd(),'database.db'),
        driver: sqlite3.Database

    })

}

export async function GET(){
    const db = await abrirBanco();

    const usuarios = await db.all('SELECT * FROM users')

    return NextResponse.json(usuarios)
}