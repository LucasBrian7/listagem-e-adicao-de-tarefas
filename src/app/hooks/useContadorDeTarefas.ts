export function useContadorDeTarefas(tarefas: { id: number; titulo: string }[]) {
  return tarefas.length;
}