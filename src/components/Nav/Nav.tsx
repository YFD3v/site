
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

interface HeaderProps {
  isFooter: boolean;
}

const Nav = ({ isFooter }: HeaderProps) => {
  return (
    <>
      {!isFooter ? (
        <Header />
      ) : (
        <Footer />
      )}
    </>
  );
};

export default Nav;
