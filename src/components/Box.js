
function Box(props){
    var nums=[[0,0,7,8,0,0,1,0,2],
            [0,0,4,9,0,1,3,0,6],
            [0,0,5,3,0,0,4,0,2],
            [0,0,0,6,0,0,7,1,8],
            [0,0,1,4,0,0,3,0,2],
            [0,0,4,9,0,0,0,0,5],
            [0,0,4,9,0,0,0,0,0],
            [0,0,0,8,0,0,1,0,7],
            [0,0,0,0,0,0,0,0,8]]
    console.log(nums[props.box-1][3])
    function input(index){
        nums[props.box-1][index]=1;
    }
    
    return (
        <div className="box">
            {nums[props.box-1].map((small)=>{
                return <div className="small-box" onClick={input} key={"smallBox"+small}>{small!=0 && small}{small==0 
                    && <input type="text" />}</div>
            })}
        </div>
    )
}
export default Box;