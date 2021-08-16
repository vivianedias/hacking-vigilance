import React from "react";
import { render, screen } from "../test-utils";
import Login from "../../pages/login";

const setup = () => render(<Login />);

describe("<Login />", () => {
  beforeEach(setup);
  it("should render the main title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
