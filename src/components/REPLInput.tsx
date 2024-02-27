import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import { HistoryElement } from "./historyElement";
import { ReactElement } from 'react';

import { view, search, loadFile } from "./CSVFunctions";

interface REPLInputProps {
  history: HistoryElement[];
  setHistory: Dispatch<SetStateAction<HistoryElement[]>>;
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  // Remember: let React manage state in your webapp.
  // Manages the contents of the input box
  const [commandString, setCommandString] = useState<string>("");
  // TODO WITH TA : add a count state

  const [isBrief, setIsBrief] = useState<boolean>(true);

  const functionMap: Readonly<{
    [key: string]: (args: string[]) => ReactElement;
  }> = {
    mode: handleMode,
    view: view,
    search: search,
    load_file: loadFile
  };
  // TODO WITH TA: build a handleSubmit function called in button onClick
  // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
  // add to it with new commands.
  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */

  function handleMode(inputString: string[]) {
    if (inputString.length != 1) {
      return (
        <span>Mode takes one argument, 'brief' or 'verbose', but you provided {inputString.length}</span>
      );
    }
    if (inputString[0] == "brief") {
      if (isBrief) {
      return (
        <span>You are already in brief mode</span>
      );
      }
      setIsBrief(true);
      return (
        <span>Success! You have switched to brief mode</span>
      );
    } else if (inputString[0] == "verbose") {
      if (!isBrief) {
        return (
         <span>You are already in verbose mode</span>
        );
      }
      setIsBrief(false);
      return (
        <span>Success! You have switched to verbose mode</span>
      );
    } else {
      return (
        <span>Mode argument must be either 'brief' or 'verbose', but you provided {inputString[0]}</span>
      );
    }
  }

  function handleSubmit(commandString: string) {
    const tokens = commandString.split(" ");
    const command = tokens[0];
    var functionResult: HistoryElement = {
      response: <span></span>,
      command: command,
      isBrief: isBrief,
      fullCommand: commandString
    };
    tokens.shift();
    if (!(command in functionMap)) {
      functionResult.response = <span>Command '{command}' not found.</span>
    } else {
      functionResult.response = functionMap[command](tokens);
    }
    // if (isBrief) {
    props.setHistory([...props.history, functionResult]);
    // } else {
    //   props.setHistory([
    //     ...props.history,
    //     "Command: " + commandString + " Output: " + functionResult,
    //   ]);
    // }
    setCommandString("");
  }

  return (
    <div className="repl-input">
      {/* This is a comment within the JSX. Notice that it's a TypeScript comment wrapped in
            braces, so that React knows it should be interpreted as TypeScript */}
      {/* I opted to use this HTML tag; you don't need to. It structures multiple input fields
            into a single unit, which makes it easier for screenreaders to navigate. */}
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
      {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
      <button aria-label="Submit" onClick={() => handleSubmit(commandString)}>
        Submit
      </button>
    </div>
  );
}
