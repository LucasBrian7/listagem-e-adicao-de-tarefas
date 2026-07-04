import { render, screen, fireEvent } from "@testing-library/react";
import NovaTarefa from "../components/NovaTarefa";

describe("NovaTarefa", () => {

  it("renderiza input e botão", () => {
    render(<NovaTarefa onAdicionar={jest.fn()} />);

    expect(screen.getByPlaceholderText("Nova tarefa")).toBeInTheDocument();

    expect(screen.getByText("Adicionar")).toBeInTheDocument();
  });

  it("não envia vazio", () => {
    const adicionar = jest.fn();

    render(<NovaTarefa onAdicionar={adicionar} />);

    fireEvent.click(screen.getByText("Adicionar"));

    expect(adicionar).not.toHaveBeenCalled();
  });

  it("envia texto corretamente", () => {
    const adicionar = jest.fn();

    render(<NovaTarefa onAdicionar={adicionar} />);

    fireEvent.change(
      screen.getByPlaceholderText("Nova tarefa"),
      {
        target: {
          value: "Comprar pão",
        },
      }
    );

    fireEvent.click(screen.getByText("Adicionar"));

    expect(adicionar).toHaveBeenCalledWith("Comprar pão");
  });

});