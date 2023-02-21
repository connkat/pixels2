import React, { useState, useEffect } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import Grid from "@mui/material/Grid";
import { Button, ThemeWrapper } from "retro-ui";

import logo from "../assets/pints.png";

export default function Header() {
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  // eslint-disable-next-line no-unused-vars
  const { mobileView, setMobileView } = state;

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
    return (
      <ThemeWrapper>
        <div className="Header">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <a href="http://pixelsyyc.com">
                <img src={logo} className="logo" alt="logo" />
              </a>
            </Grid>
            <Grid item xs={8}>
              <div className="title">
                <h1>Pixels and Pints</h1>
                <p>
                  Home of Calgary
                  <a
                    href="https://pixels-og.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    '
                  </a>
                  s Oldest Tech Meetup
                </p>
              </div>
            </Grid>
            <Grid item xs={2}>
              <div className="buttons">
                <div className="meetup-button">
                  <a
                    className="App-link"
                    href="https://www.meetup.com/pxandpints/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Pixels Meetup</Button>
                  </a>
                </div>
                <div className="discord-button">
                  <a
                    className="App-link"
                    href="https://discord.gg/y5JKKkHYgN"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Pixels Discord</Button>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </ThemeWrapper>
    );
  };

  const displayMobile = () => {
    return (
      <Toolbar>
        <div className="Header_mobile">
          <img src={logo} className="logo_mobile" alt="logo" />
          <div className="buttons-mobile	">
            <div className="meetup-button">
              <a
                className="App-link"
                href="https://www.meetup.com/pxandpints/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Meetup</button>
              </a>
            </div>
            <div className="discord-button">
              <a
                className="App-link"
                href="https://discord.gg/y5JKKkHYgN"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button>Discord</button>
              </a>
            </div>
          </div>
        </div>
      </Toolbar>
    );
  };

  return (
    <header>
      <AppBar
        style={{ background: "#FFFFFF", color: "#000000", position: "fixed" }}
        position="absolute"
      >
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
