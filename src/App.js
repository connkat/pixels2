import Grid from "@mui/material/Grid";

import Header from "./components/Header";

import joboffer from "./assets/joboffer.png";

import "./App.css";

function App() {
	const body = `<body>
<acuspire-job-widget></acuspire-job-widget>
</body>`;

	return (
		<>
			<Header />
			<div className="App">
				<div className="job-board-title">
					<Grid container spacing={2}>
						<Grid item sm={3}>
							<div className="sponsored">
								<p>Sponsored by</p>
								<img src={joboffer} className="joboffer" alt="joboffer" />
							</div>
						</Grid>
						<Grid item xs={12} sm={6}>
							<h3>Pixels Job Board</h3>
						</Grid>
            <Grid item xs={0} sm={1} />
						<Grid item xs={10} sm={2}>
							<div className="login">
								<div className="login-wrapper">
									<p>Employers</p>
									<div className="button-container">
										<button
											href="https://pixels-recruiter.joboffer.ai/register"
											target="_blank"
											rel="noopener noreferrer"
										>
											Register
										</button>
										<button
											href="https://pixels-recruiter.joboffer.ai/login"
											target="_blank"
											rel="noopener noreferrer"
										>
											Login
										</button>
									</div>
								</div>
								<div className="login-wrapper">
									<p>Jobseekers</p>
									<div className="button-container">
										<button
											href="https://pixels.joboffer.ai/register"
											target="_blank"
											rel="noopener noreferrer"
										>
											Register
										</button>
										<button
											href="https://pixels.joboffer.ai/login"
											target="_blank"
											rel="noopener noreferrer"
										>
											Login
										</button>
									</div>
								</div>
							</div>
						</Grid>
					</Grid>
				</div>
				<div dangerouslySetInnerHTML={{ __html: body }} />{" "}
			</div>
		</>
	);
}

export default App;
