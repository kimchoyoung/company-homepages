let count1=0;
let count2=0;
function text1_show(){
    if(count1%2===0)
        document.getElementById("disappear-1").style.display = "block";
    else
        document.getElementById("disappear-1").style.display = "none";
    count1++;
}

function text2_show(){
    if(count2%2===0) {
        document.getElementById("disappear-2").style.display = "block";
    } else{
        document.getElementById("disappear-2").style.display = "none";
    }
    count2++;
}
