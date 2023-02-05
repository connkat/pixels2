import { Button, ThemeWrapper } from "retro-ui";

import "../App.css";

import logo from "../assets/pints.png";

function Header() {
  return (
    <ThemeWrapper>
      <div className="Header">
        <img src={logo} className="logo" alt="logo" />
        <div className="buttons">
          <div className="meetup-button">
            <a
              className="App-link"
              href="https://www.meetup.com/pxandpints/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Find the next meeting</Button>
            </a>
          </div>
          <div className="discord-button">
            <a
              className="App-link"
              href="https://discord.gg/y5JKKkHYgN"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Join the Pixels Discord</Button>
            </a>
          </div>
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default Header;
