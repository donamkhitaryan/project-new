myForm.addEventListener("submit", addto);
function addto(e){
  e.preventDefault();
  let myText= document.getElementById("testInput").value;
  let newP= document.createElement("p");
  let newButten= document.createElement("BUTTON");
  newButten.innerHTML = "Remove";
  newP.innerText= myText;
 document.getElementById("testId").appendChild(newP);
  document.querySelector("p").appendChild(newButten);
  newButten.onclick= function(){
    document.querySelector("p").hidden=true;
  };
};