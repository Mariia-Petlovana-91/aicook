import {render, screen} from "@testing-library/react"
import App from "../App.tsx"

test("рендерить HELLO", () => {
    render(<App />)
    expect(screen.getByText(/HELLO/i)).toBeInTheDocument()
})
