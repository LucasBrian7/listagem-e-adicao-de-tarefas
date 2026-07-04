import { renderHook } from "@testing-library/react";
import { useContadorDeTarefas } from "../hooks/useContadorDeTarefas";

describe("useContadorDeTarefas", () => {

  it("retorna quantidade correta", () => {

    const tarefas = [
      { id: 1, titulo: "A" },
      { id: 2, titulo: "B" },
      { id: 3, titulo: "C" },
    ];

    const { result } = renderHook(() =>
      useContadorDeTarefas(tarefas)
    );

    expect(result.current).toBe(3);

  });

});