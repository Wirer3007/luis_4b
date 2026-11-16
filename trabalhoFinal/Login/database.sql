import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('cadastros.db');

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      senha TEXT NOT NULL
    );
  `);
};

export async function adicionarPessoa(nome, senha) {
  await db.runAsync(
    'INSERT INTO pessoas (nome, senha) VALUES (?, ?);',
    [nome, senha]
  );
};

