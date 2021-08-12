import React from "react";
import { render, screen } from "@testing-library/react";
import Home from ".";

const setup = () => render(<Home />);

describe("<Main />", () => {
  setup();
  it("should render the main title", () => {
    expect(screen.getByText(/main/i)).toBeInTheDocument();
  });
});
