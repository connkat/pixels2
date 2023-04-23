import Grid from "@mui/material/Grid";

import logo from "../assets/pints.png";
import discord from "../assets/discord.png";
import meetup from "../assets/meetup.png";

import "./Header.css";

export default function Header() {
	return (
		<div className="Header">
			<Grid container spacing={2}>
				<Grid item md={2} xs={3}>
					<a
						href="http://pixelsyyc.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src={logo} className="logo" alt="logo" />
					</a>
				</Grid>
				<Grid item md={8} xs={6}>
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
				<Grid item md={2} xs={3}>
					<div className="links">
						<div className="links">
							<a
								href="https://discord.gg/y5JKKkHYgN"
								target="_blank"
								rel="noopener noreferrer"
								alt="discord"
							>
								<img src={discord} className="link" alt="discord" />
								<p className="desktop_label">Discord</p>
							</a>
							<a
								href="https://www.meetup.com/pxandpints/"
								target="_blank"
								rel="noopener noreferrer"
								alt="meetup"
							>
								<img src={meetup} className="link" alt="meetup" />
								<p className="desktop_label">Meetup</p>
							</a>
						</div>
					</div>
				</Grid>
			</Grid>
		</div>
	);
}
