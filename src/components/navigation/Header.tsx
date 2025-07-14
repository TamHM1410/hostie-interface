import React from "react";
import { useWindowSize } from "../../hooks/useWindowSize";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

const Header = () => {
  const { width } = useWindowSize();
  return (
    <React.Fragment>
      {width > 900 ? <NavDesktop /> : <NavMobile />}
    </React.Fragment>
  );
};
export default Header;
