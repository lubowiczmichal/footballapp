import { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table.js";
import LeagueButton from "./LeagueButton.js";

function App() {
  const [selected, setSelected] = useState("");
  const [table, setTable] = useState();
  const leagues = [
    { id: "eng.1", name: "Premier League", idAPI: 4328 },
    { id: "ger.1", name: "Bundesliga", idAPI: 4331 },
    { id: "ita.1", name: "Serie A", idAPI: 4332 },
    { id: "fra.1", name: "Ligue 1", idAPI: 4334 },
    { id: "spa.1", name: "La Liga", idAPI: 4335 },
    { id: "pol.1", name: "Ekstraklasa", idAPI: 4422 },
  ];
  const fetchData = async (id) => {
    await fetch(
      `https://www.thesportsdb.com/api/v1/json/2/lookuptable.php?l=${id}&s=2021-2022`
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setTable(result);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Football league tables</h1>
      <div className="buttonSection">
        {leagues.map((item) => (
          <LeagueButton
            key={item.id}
            league={item}
            onClick={leagueButtonClick}
          />
        ))}
        <Table table={table} />
      </div>
    </div>
  );
  function leagueButtonClick(senderId) {
    fetchData(senderId);
  }
  function getLeagueIdAPI(id) {
    return leagues.filter(function (league) {
      return league.id == id;
    })[0].idAPI;
  }
}

export default App;
