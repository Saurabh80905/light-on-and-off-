var bulb=document.getElementById("child");
var btn=document.querySelector("button");
var flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        btn.innerText="OFF";
        flag=1;
    }
    else{
        bulb.style.backgroundColor="white";
        btn.innerHTML="ON";
        flag=0;
    }
})
