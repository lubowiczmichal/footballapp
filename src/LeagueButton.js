import "./LeagueButton.css";
function LeagueButton(props) {
  return (
    <div className="LeagueButton">
      <a onClick={() => props.onClick(props.league.idAPI)}>
        {props.league.name}
      </a>
    </div>
  );
}

export default LeagueButton;
