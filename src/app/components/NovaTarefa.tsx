"use client";

import { useState } from "react";
import styles from "./NovaTarefa.module.css";

type Props = {
  onAdicionar: (titulo: string) => void;
};

export default function NovaTarefa({ onAdicionar }: Props) {
  const [texto, setTexto] = useState("");

  function enviar(e: React.FormEvent) {
    e.preventDefault();

    if (!texto.trim()) return;

    onAdicionar(texto);

    setTexto("");
  }

  return (
    <form onSubmit={enviar} className={styles.form}>
      <input
        className={styles.input}
        placeholder="Digite uma tarefa..."
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
      />

      <button className={styles.botao} type="submit">
        Adicionar
      </button>
    </form>
  );
}