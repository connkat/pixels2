import { AppBar, Toolbar, IconButton, Drawer } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import Header from "./Header";

const headersData = [
  {
    label: "Discord",
    href: "https://discord.gg/y5JKKkHYgN",
  },
  {
    label: "Meetup",
    href: "https://www.meetup.com/pxandpints/",
  },
];

export default function Nav() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 600
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return <Header />;
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <div className="header-wrapper">
          <IconButton
            {...{
              edge: "end",
              color: "#ffffff",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Drawer
          {...{
            anchor: "right",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className="drawerContainer">{getDrawerChoices()}</div>
        </Drawer>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    // const handleDrawerClose = () =>
    //   setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <>
        {/* <div className="x">
          <button onClick={handleDrawerClose}>
            <img src={mobileX} alt="exit" />
          </button>
        </div> */}
        <div className="titles-map">
          {headersData.map(({ label, href }) => {
            return (
              <>
                <a href={href} alt="button">
                  <li>{label}</li>
                </a>
                <div className="hl" />
              </>
            );
          })}
        </div>
      </>
    );
  };

  return (
    <header>
      <AppBar style={{ background: "#FFFFFF" }} position="absolute">
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}