import React from "react";

import { render, screen, fireEvent } from "../../../test/test-utils";
import Counter from "./Counter";

describe("Counter", () => {
  it("should render", () => {
    render(<Counter />);
  });

  it("should increment count when + is clicked", () => {
    render(<Counter />);

    fireEvent.click(screen.getByText(/\+/i));

    const count = screen.getByText(/Count:/i);
    expect(count.innerHTML).toBe("Count: 1");
  });

  it("should reset count when reset is clicked", () => {
    render(<Counter />, { initialState: { counter: { count: 5 } } });

    fireEvent.click(screen.getByText(/reset/i));

    const count = screen.getByText(/Count:/i);
    expect(count.innerHTML).toBe("Count: 0");
  });
});
