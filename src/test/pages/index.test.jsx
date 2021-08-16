import React from "react";
import { render, screen } from "../test-utils";
import Home from "../../pages";

const setup = () => render(<Home />);

describe("<Main />", () => {
  beforeEach(setup);
  it("should render the main title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
