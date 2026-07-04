import { render, screen } from "@testing-library/react";
import ListaTarefas from "../components/ListaTarefas";

describe("Página", () => {

  it("renderiza as tarefas", () => {

    render(
      <ListaTarefas
        tarefasIniciais={[
          { id: 1, titulo: "Estudar" },
          { id: 2, titulo: "Dormir" },
        ]}
      />
    );

    expect(screen.getByText("Estudar")).toBeInTheDocument();

    expect(screen.getByText("Dormir")).toBeInTheDocument();

    expect(screen.getByText("Total: 2")).toBeInTheDocument();

  });

});