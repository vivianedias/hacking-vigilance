import { Navbar } from "../../components";
import { render, screen } from "../test-utils";

const setup = () => render(<Navbar />);

describe("<Navbar />", () => {
  beforeEach(setup);
  it("should show a login button", () => {
    expect(screen.getByRole("link", { name: /login/i }));
  });
});
