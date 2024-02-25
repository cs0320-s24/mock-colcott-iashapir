export function view(args: string[]){
    if(args.length != 0){
        return(
            <p>View requires 0 arguments but you provided {args.length}</p>
        )
    }
    const csv1 = [["StarID", "Name", "X", "Y", "Z"],
                  ["100", "Jasper", "0.55555555", "0.9", "3.4"],
                  ["101", "Isabelle", "0.7", "1.8", "8.9"]];
    
    return convertStringList(csv1);
}

export function loadfile(args: string[]){
    
}

export function search(args: string[]){

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

