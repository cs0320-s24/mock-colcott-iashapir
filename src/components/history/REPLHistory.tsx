import "../styles/main.css";
import { HistoryElement } from "./historyElement";

interface REPLHistoryProps {
  history: HistoryElement[];
  // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      <p>Command history:</p>
      {/* This is where command history will go */}
      {/* TODO: To go through all the pushed commands... try the .map() function! */}
      {props.history.map((command) =>
        command.isBrief ? (
          <div className="repl-history-output">
            <p>{command.response}</p>
          </div>
        ) : (
          <div className="repl-history-output">
            <p>Command: {command.fullCommand}</p>
            <p>Ouput: {command.response}</p>
          </div>
        )
      )}
    </div>
  );
}
