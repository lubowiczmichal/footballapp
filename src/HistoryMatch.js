import "./HistoryMatch.css";

function HistoryMatch(props) {
  return (
    <div className="HistoryMatch" id={props.match}>
      {props.match}
    </div>
  );
}

export default HistoryMatch;
