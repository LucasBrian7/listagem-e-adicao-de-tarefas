"use client";

import { useState } from "react";
import NovaTarefa from "./NovaTarefa";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";
import styles from "./ListaTarefas.module.css";

type Tarefa = {
  id: number;
  titulo: string;
};

type Props = {
  tarefasIniciais: Tarefa[];
};

export default function ListaTarefas({ tarefasIniciais }: Props) {
  const [tarefas, setTarefas] = useState(tarefasIniciais);

  function adicionar(titulo: string) {
    setTarefas([
      ...tarefas,
      {
        id: Date.now(),
        titulo,
      },
    ]);
  }

  const total = useContadorDeTarefas(tarefas);

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>📋 Lista de Tarefas</h1>

      <p className={styles.total}>
        Total: {total}
      </p>

      <NovaTarefa onAdicionar={adicionar} />

      <ul className={styles.lista}>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={styles.item}>
            {tarefa.titulo}
          </li>
        ))}
      </ul>
    </main>
  );
}