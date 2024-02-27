const starCSV = [["StarID", "Name", "X", "Y", "Z"],
                  ["100", "Jasper", "0.55", "0.9", "3.4"],
                  ["101", "Isabelle", "0.7", "1.8", "8.9"]];

const studentCSV = [["Name", "GradYear", "Height", "Weight"],
                  ["Jasper", "2027", "70", "180"],
                  ["Charlie", "2026", "72", "170"],
                  ["Ashley", "2025", "67", "120"],
                  ["Lucas", "2024", "80", "220"]];

const blankCSV = [[""]];

const csvFileMap: Map<string, string[][]> = new Map([
    ["./star_csv", starCSV],
    ["./student_csv", studentCSV],
    ["./blank_csv", blankCSV]
]);

const starResults = [["100", "Jasper", "0.5", "0.9", "3.4"]];
const studentResults = [["Charlie", "2026", "72", "170"]];

const csvSearchMap: Map<string[][], string[][]> = new Map([
    [starCSV, starResults],
    [studentCSV, studentResults]
]);

var currentCSV = [[""]];
var isLoaded = false;

export function view(args: string[]){
    if(args.length != 0){
        return(
            <span>View requires 0 arguments but you provided {args.length}</span>
        );
    }
    if (!isLoaded){
        return(
            <span>View requires a file to have been loaded using load_file but no file is loaded yet</span>
        );
    }
    return convertStringList(currentCSV);
}

export function loadFile(args: string[]){
    if(args.length != 1){
        return(
            <span>Load requires 1 arguments but you provided {args.length}</span>
        );
    }
    const fileName = args[0];
    const successResponse = <span>Successfully loaded</span>;
    if(fileName == "./malformed_csv"){
        return <span>Malformed csv file</span>;
    }
    if(csvFileMap.has(fileName)){
        currentCSV = csvFileMap.get(fileName)!;
        setLoadedTrue();
        return successResponse;
    }else{
        return <span>File '{fileName}' not found</span>;
    }
}

export function setLoadedTrue(){
    if(!isLoaded){
        isLoaded = true;
    }
}
//search (from server) returns "error_bad_request" for any bad inputs. thus no checking parameters?
//args should be 
export function search(args: string[]){
    if(args.length != 2){
        return(
            <span>Search requires 2 arguments but you provided {args.length}</span>
        );
    }
    if(csvSearchMap.has(currentCSV)){
        return convertStringList(csvSearchMap.get(currentCSV)!);
    }else{
        return <span>Search unsuccessful</span>;
    }
}

export function convertStringList(data: string[][]){
    return (
        <table>
            {data.map((row) =>
            <tr>
                {row.map((element) =>
                <td>{element}</td>)}
            </tr>)
            }
        </table>
    );
}

