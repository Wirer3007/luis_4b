import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('cadastros.db');

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS pessoas (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT,
      senha TEXT
    );
  `);

  const colunas = await db.getAllAsync(
    'PRAGMA table_info(pessoas);'
  );

  const temSenha = colunas.some(
    (coluna) => coluna.name === 'senha'
  );

  if (!temSenha) {
    await db.execAsync(
      'ALTER TABLE pessoas ADD COLUMN senha TEXT;'
    );
  }
}

export async function adicionarPessoa(nome, senha) {
  await db.runAsync(
    'INSERT INTO pessoas (nome, senha) VALUES (?, ?);',
    [nome, senha]
  );
}

export async function listarPessoas() {
  const pessoas = await db.getAllAsync(
    'SELECT * FROM pessoas;'
  );

  return pessoas;
}

