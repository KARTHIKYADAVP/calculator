
function backspace()
{
    let x=document.getElementById('input1').value
    document.getElementById('input1').value=x.substr(0,x.length-1)
}

 function focus()
{
    document.getElementById("input1").style.backgroundColor="orange"
}

function blur()
{
    document.getElementById("input1").style.backgroundColor="grey"
} 