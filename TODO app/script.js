let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click", function(){
let item =document.createElement("li");
item.innerText=inp.value;

let dlt=document.createElement("button");
dlt.innerText="delete";
dlt.classList.add("delete");    
item.appendChild(dlt)

ul.appendChild(item);
inp.value="";


});
ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON");
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("deleted");

});