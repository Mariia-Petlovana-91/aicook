import { render, screen } from "@testing-library/react";
import App from "../App.js";

test("рендерить HELLO", () => {
  render(<App />);
  expect(screen.getByText(/HELLO/i)).toBeInTheDocument();
});
