import { useState } from "react";
import "../styles/main.css";
import { REPLHistory } from "./REPLHistory";
import { REPLInput } from "./REPLInput";
import { HistoryElement } from "./historyElement";

/* 
  You'll want to expand this component (and others) for the sprints! Remember 
  that you can pass "props" as function arguments. If you need to handle state 
  at a higher level, just move up the hooks and pass the state/setter as a prop.
  
  This is a great top level component for the REPL. It's a good idea to have organize all components in a component folder.
  You don't need to do that for this gearup.
*/

/**
 * displays the REPLHistory, which contains all of the past command results, and displays
 * the REPLInput, which contains all of the user input functionality
 * 
 * @return both the REPLHistory and the REPLInput
 */
export default function REPL() {

  const [history, setHistory] = useState<HistoryElement[]>([]);

  return (
    <div className="repl">
      <REPLHistory history={history} />
      <hr></hr>
      <REPLInput history={history} setHistory={setHistory} />
    </div>
  );
}
