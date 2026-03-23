import { render, screen, fireEvent } from "@testing-library/react";
import { TodoList } from "./TodoList";

test("renders todo list", () => {
  render(<TodoList />);
  expect(screen.getByText("Todo List")).toBeInTheDocument();
});

test("adds todo item", () => {
  render(<TodoList />);

  fireEvent.change(screen.getByTestId("todo-input"), {
    target: { value: "Hello" },
  });

  fireEvent.click(screen.getByTestId("add-button"));

  expect(screen.getByText("Hello")).toBeInTheDocument();
});