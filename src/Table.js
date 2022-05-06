import HistoryMatch from "./HistoryMatch";
import "./Table.css";

function Table(props) {
  return props && props.table && props.table.table ? (
    <div className="Table">
      <thead>
        <tr>
          <th></th>
          <th>Team</th>
          <th>Matches</th>
          <th>Wins</th>
          <th>Draws</th>
          <th>Losses</th>
          <th>Goals</th>
          <th>Points</th>
          <th>Form</th>
        </tr>
      </thead>
      {props && props.table && props.table.table ? (
        <tbody>
          {props.table.table.map((item) => {
            return (
              <tr>
                <td>{item.intRank || ""}</td>
                <td className="Team">
                  <img src={item.strTeamBadge} />
                  <p>{item.strTeam || ""}</p>
                </td>
                <td>{item.intPlayed || ""}</td>
                <td>{item.intWin || ""}</td>
                <td>{item.intLoss || ""}</td>
                <td>{item.intDraw || ""}</td>
                <td>
                  {item.intGoalsFor || ""}:{item.intGoalsAgainst || ""}
                </td>
                <td>{item.intPoints || ""}</td>
                <td>
                  {[...item.strForm].map((a) => {
                    return <HistoryMatch match={a} />;
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      ) : (
        " "
      )}
    </div>
  ) : (
    <p className="Info">Please select one of leagues</p>
  );
}

export default Table;
