import { Navbar, Footer } from "../";

const PageLayout = ({ children }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default PageLayout;
