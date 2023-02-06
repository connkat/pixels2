import Header from "./components/Header";

import "./App.css";

function App() {
  const body = `<body>
<acuspire-job-widget></acuspire-job-widget>
</body>`;

  return (
    <>
      <Header />
      <div className="App">
        <h3>Pixels Job Board</h3>
        <div dangerouslySetInnerHTML={{ __html: body }} />{" "}
      </div>
    </>
  );
}

export default App;
