let input = document.querySelector("input");
let buttons = document.querySelectorAll("button");
let screen =""
function display(num) {
  if (num === "no") {
    input.value ="";
  }
  else{
   input.value += num;
}
}
function disone() {
  input.value += "(";
}
function distwo ()
{
  input.value += ")";

}
function Equl() {
  try{
    input.value = eval(input.value);
  }
  catch(err){
   input.value = "error";
  }
}