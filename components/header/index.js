import React from "react";
import ResponsiveAppBar from "../../components/appbar";

const Header = (props) => {
  const pages = [
    { label: "Home", navigate: "/" },
    { label: "Granth", navigate: "/granth" },
    { label: "Portfolio", navigate: "/portfolios" },
    { label: "Video", navigate: "/videos" },
    { label: "Contact Us", navigate: "/contact-us" },
  ];
  return (
    <>
      <ResponsiveAppBar pages={pages} logo={"/project-light-logo.png"} />
    </>
  );
};

export default Header;
