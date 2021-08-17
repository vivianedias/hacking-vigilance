import { Navbar } from "../../components";
import { render, screen } from "../test-utils";

const setup = () => render(<Navbar />);

describe("<Footer />", () => {
  beforeEach(setup);
  it("should show a home link", () => {
    expect(screen.getByRole("link", { name: /home/i }));
  });
});
