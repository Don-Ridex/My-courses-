var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul")

button.addEventListener("click", () =>{
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
})

