var xhr;
let url='http://localhost:3000/public/images/';

function makeRequest(){
    xhr=new XMLHttpRequest();
     if(!xhr){
         alert('NO')
         return false;
    }
    xhr.onreadystatechange=alertContents;
    xhr.open('get', 'http://localhost:3000/all_pic');
    xhr.send();
    }

function alertContents(){
    if(xhr.readyState===XMLHttpRequest.DONE){
        if(xhr.status===200){
            var test=xhr.response.replace(/["]/g,'');
            test= test.substring(1,test.length-1);
            let test2=test.split(",");
            alert(test2);

//            let lis=document.createElement("li");
//
//             for(var i=0; i<test2.length; ++i){
//                 let imgNode=document.createElement("img");
//                 imgNode.setAttribute("src", url+test2[i]);
//                 lis.appendChild(imgNode);
//             }
//             document.getElementById("slider").appendChild(lis);

        }else{
            alert(`:'(`);
        }
    }
}
