import Grid from "@mui/material/Grid";

import logo from "../assets/pints.png";
import discord from "../assets/discord.svg";
import meetup from "../assets/meetup.png";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <a href="http://pixelsyyc.com">
            <img src={logo} className="logo" alt="logo" />
          </a>
        </Grid>
        <Grid item xs={6}>
          <div className="title">
            <h1>Pixels &amp; Pints</h1>
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
        <Grid item xs={3}>
          <div className="links">
            <div className="links">
              <a href="https://discord.gg/y5JKKkHYgN" alt="button">
                <img src={discord} className="link" alt="logo" />
              </a>
              <a href="https://www.meetup.com/pxandpints/" alt="button">
                <img src={meetup} className="link" alt="logo" />
              </a>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
