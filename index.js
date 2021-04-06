var input=document.getElementById('input');
var btn=document.getElementById('btn');
var list=document.getElementById('list');
var initialCount="";
input.addEventListener('input',function(e){
    initialCount=e.target.value;
})

btn.addEventListener('click',function(){
    var newListItem=document.createElement("li");
    var textNode=document.createTextNode(initialCount);
    list.id="list"+list.childElementCount;
    newListItem.appendChild(textNode);
    list.appendChild(newListItem);
    input.value="";
    initialCount="";

})