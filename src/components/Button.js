function Button(){
    var btn=[];
    for(var i=1;i<=9;i++){
        btn.push(i);
    }
    function hideBtn(){
        var ip=document.getElementsByClassName("button-container");
        ip[0].style.display="none";
        inputNum();
    }
    function inputNum(){
        console.log("inside ip");
        var change=document.getElementsByClassName("small-box");
        for(var i=0;i<change.length;i++){
            console.log("change",change[i]);
            change[i].addEventListener("click",event);
            function event(){
                var number=document.getElementsByClassName("button");
                var n;
                console.log("inside change",number.length);
                for(var j=0;j<number.length;j++){
                    number[j].addEventListener("click",event2);
                    function event2(){
                        console.log("change num");
                        n=number[j].innerText;
                    }
                    number[j].removeEventListener("click",event2);
                }
                change[i].innerText=n;
            }
            change[i].removeEventListener("click",event);
        }
    }
    return (
        <div className="button-container">
            {btn.map((bt)=>{
                return <div className="small-box button" onClick={hideBtn} key={"btn"+bt}>{bt}</div>
            })} 
        </div>
    )
}
export default Button;