import "../styles/main.css";
import { HistoryElement } from "./HistoryElement";

interface REPLHistoryProps {
  history: HistoryElement[];
  // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props: REPLHistoryProps) {
  const commandHistory = props.history;
  return (
    <div className="repl-history">
      <p>Command history:</p>
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {props.history.map((command, index) => (
        command.isBrief ? (
          <p key = {index}> {command.response}</p> 
        ) : (
            <div>
                <p key = {index}>Command: {command.response}</p>
                <p key = {index}>Ouput: {command.response}</p> 
          </div>
        )
      ))}
    </div>
  );
}
