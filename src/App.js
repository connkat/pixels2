import Grid from "@mui/material/Grid";

import Nav from "./components/Nav";

import joboffer from "./assets/joboffer.png";

import "./App.css";

function App() {
  const body = `<body>
<acuspire-job-widget></acuspire-job-widget>
</body>`;

  return (
    <>
      <Nav />
      <div className="App">
        <div className="job-board-title">
          <Grid container spacing={2}>
          <Grid item xs={3}/>
            <Grid item xs={12} sm={6}>
              <h3>Pixels Job Board</h3>
            </Grid>
            <Grid item xs={10} sm={3}>
              <p>
                Powered by
                <img src={joboffer} className="joboffer" alt="joboffer" />{" "}
              </p>
            </Grid>
          </Grid>
        </div>
        <div dangerouslySetInnerHTML={{ __html: body }} />{" "}
      </div>
    </>
  );
}

export default App;
