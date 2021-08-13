import Navbar from "./Navbar";
import { render } from "@testing-library/react";

const setup = () => render(<Navbar />);

describe("<Navbar />", () => {
  beforeEach(setup);
});
