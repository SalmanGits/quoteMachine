function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [randomQuotes, setRandomQuotes] = React.useState([]);
  const [color, setRandomColor] = React.useState(["#fff"]);
  React.useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://type.fit/api/quotes");
      const data = await response.json();
      setQuotes(data);

      let randomIndex = Math.floor(Math.random() * data.length);
      setRandomQuotes(data[randomIndex]);
    }
    fetchData();
  }, []);
  const getQuotes = () => {
    const colors = [
      "#88f7f1",
      " #88f7f1",
      "#c8c2f9",
      "	#d27aff",
      "#cce2ff	",
      "#ebef7a	",
      "#f7b2c4	",
      "#ffadfa	",
      "#7dedc7	",
    ];
    let randIndex = Math.floor(Math.random() * quotes.length);
    let randcolors = Math.floor(Math.random() * colors.length);
    setRandomQuotes(quotes[randIndex]);
    setRandomColor(colors[randcolors]);
  };
  return (
      <div style={{backgroundColor: color,minHeight:"100vh"}}>
    <div className="conatiner pt-5">
      <div className="jumbotron">
        <div className="card">
          <div className="card-header">Quotes</div>
          <div className="card-body">
            {randomQuotes ? (
              <>
                <h5 className="card-title">
                  {randomQuotes.author || "Unknown"}
                </h5>
                <p className="card-text">{randomQuotes.text || "loading..."}</p>
              </>
            ) : (
              <h3>Loading</h3>
            )}
            <div className="row">
              <button className="btn btn-danger" onClick={getQuotes}>
                New Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
