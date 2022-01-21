function see (v)
{
document.getElementById("g").value+=v;
}
function calc()
{
    let x=document.getElementById("g").value;
    let y=eval(x);
    if(y==undefined)
    {
        document.getElementById("g") .value="ERROR";
    }
    else{
    document.getElementById("g") .value=y;
    }
}
function clr ()
{
    document.getElementById("g").value="";
}


