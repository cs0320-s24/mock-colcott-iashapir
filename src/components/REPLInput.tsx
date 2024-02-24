import '../styles/main.css';
import { Dispatch, SetStateAction, useState} from 'react';
import { ControlledInput } from './ControlledInput';

interface REPLInputProps{
  history: string[],
  setHistory: Dispatch<SetStateAction<string[]>>;
  // TODO: Fill this with desired props... Maybe something to keep track of the submitted commands
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props : REPLInputProps) {
    // Remember: let React manage state in your webapp. 
    // Manages the contents of the input box
    const [commandString, setCommandString] = useState<string>('');
    // TODO WITH TA : add a count state

    const [isBrief, setIsBrief] = useState<boolean>(false);

    const functionMap: Readonly<{ [key: string]: (args: string[]) => string}> = {
      "mode": handleMode
    };
    // TODO WITH TA: build a handleSubmit function called in button onClick
    // TODO: Once it increments, try to make it push commands... Note that you can use the `...` spread syntax to copy what was there before
    // add to it with new commands.
    /**
     * We suggest breaking down this component into smaller components, think about the individual pieces 
     * of the REPL and how they connect to each other...
     */
    

    function handleMode(inputString: string[]){
      var message;
      if(inputString.length != 1){
        return "Mode takes one argument, 'brief' or 'verbose', but you provided " + inputString.length;
      }
      if (inputString[0] == "brief"){
        if(isBrief){
          return "You are already in brief mode";
        }
        setIsBrief(true);
        return "Success! You have switched to brief mode"
      } else if (inputString[0] == "verbose"){
        if(!isBrief){
          return "You are already in verbose mode";
        }
        setIsBrief(false);
        return "Success! You have switched to verbose mode"
      }else{
        return "Mode argument must be either 'brief' or 'verbose', but you provided " + inputString[0];
      }
      return message;
    }

    
    function handleSubmit(commandString: string){
      const tokens = commandString.split(' ');
      const command = tokens[0];
      tokens.shift();
      const functionResult = functionMap[command](tokens);
      if(isBrief){
        props.setHistory([...props.history, functionResult]);
      }else{
        props.setHistory([...props.history, "Command: " + commandString + " Output: " + functionResult]);
      }
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
              <ControlledInput value={commandString} setValue={setCommandString} ariaLabel={"Command input"}/>
            </fieldset>
            {/* TODO WITH TA: Build a handleSubmit function that increments count and displays the text in the button */}
            {/* TODO: Currently this button just counts up, can we make it push the contents of the input box to the history?*/}
            <button aria-label='Submit' onClick = {() => handleSubmit(commandString)}>Submit</button>
        </div>
    );
  }