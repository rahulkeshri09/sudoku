import Box from './Box';
import Button from './Button';
function Sudoku(){
    var box=[];
    for(var i=1;i<=9;i++){
        box.push(i);
    }
    function close(){
        var res=document.getElementById("sudoku-container");
        res.innerHTML="<h1>you win</h1>"
    }
    return (
        <div id="sudoku-container">
            {box.map((bo)=>{
                return <Box key={"box"+bo} box={bo}/>
            })}
            <button className="Butoon-container" onClick={close}>Submit</button>
        </div>
    )
}
export default Sudoku; 