export function view(args: string[]){
    if(args.length != 0){
        return(
            <span>View requires 0 arguments but you provided {args.length}</span>
        )
    }
    const csv1 = [["StarID", "Name", "X", "Y", "Z"],
                  ["100", "Jasper", "0.55", "0.9", "3.4"],
                  ["101", "Isabelle", "0.7", "1.8", "8.9"]];
    
    return convertStringList(csv1);
}

export function loadfile(args: string[]){
    
    return <span>Successfully loaded</span>
}

//search (from server) returns "error_bad_request" for any bad inputs. thus no checking parameters?
//args should be 
export function search(args: string[]){
    const searchResults = [["100", "Jasper", "0.5", "0.9", "3.4"]];
    return convertStringList(searchResults);
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
    )
}

