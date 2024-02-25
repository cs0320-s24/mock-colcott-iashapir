import '../styles/main.css';

interface REPLHistoryProps{
    history : string[];
    
    // TODO: Fill with some shared state tracking all the pushed commands
}
export function REPLHistory(props : REPLHistoryProps) {
    const commandHistory = props.history;
    return (
        <div className="repl-history">
            <p>Command history:</p>
            {/* This is where command history will go */}
            {/* TODO: To go through all the pushed commands... try the .map() function! */}
            {props.history.map(
                (command) =>
                <p>{command}</p>
            )}
        </div>
    );
}