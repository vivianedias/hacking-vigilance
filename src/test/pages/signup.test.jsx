import React from "react";
import { render, screen } from "../test-utils";
import Signup from "../../pages/signup";

const setup = () => render(<Signup />);

describe("<Signup />", () => {
  beforeEach(setup);
  it("should render the main title", () => {
    expect(screen.getByText(/title/i)).toBeInTheDocument();
  });
});
