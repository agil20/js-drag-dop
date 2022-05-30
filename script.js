


let drag=document.querySelectorAll(".draggable-element");
let area1=document.querySelector(".area1")
let area2=document.querySelector(".area2")

let id;

drag.forEach(item=>
{
item.ondragstart=function(ev){
ev.dataTransfer.setData("id",this.id)
}
})
area1.ondragover=function(ev){
    ev.preventDefault();
}
area2.ondragover=function(ev){
  ev.preventDefault();
}
area1.ondrop=function(ev){
    //ilk 4 olan birinciye dusecek 4 den sonralar 2 boxa
 let id=ev.dataTransfer.getData("id")
    let drag=document.getElementById(id)
    if(id==1||id==2 ||id==3||id==4){
    area1.append(drag)}
  }
area2.ondrop=function(ev){
    
 let id=ev.dataTransfer.getData("id")
    let drag=document.getElementById(id)
    if(id==5||id==6 ||id==7||id==8)
      {
      area2.append(drag)}
    }  
