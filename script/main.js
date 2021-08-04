var inp_as = document.getElementById('a_size'), array_size=inp_as.value;
var inp_gen=document.getElementById("a_generate");
var inp_aspeed=document.getElementById("a_speed");
var algo=document.querySelectorAll(".navbar-nav .nav-item button");
console.log(algo[0]);

var div_sizes=[];
var divs=[];
var margin_size;
var cont=document.getElementById("array_container");
cont.style="flex-direction:row";

inp_gen.addEventListener("click",generate_array);
inp_as.addEventListener("input",update_array_size);

function generate_array()
{
  cont.innerHTML = "";
  for(var i=0;i<array_size;i++)
  { //to generate bars with different values i.e. height of the bar
    div_sizes[i]=Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
    divs[i]=document.createElement("div");
    cont.appendChild(divs[i]);
    margin_size=0.1;
    divs[i].style=" margin:0% " + margin_size + "%; background-color:blue; width:" + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
  }
}

function update_array_size()
{
  array_size = inp_as.value;
  generate_array()
}

window.onload=update_array_size(); //to call update array size function on each refresh of the page

//adding event listner for all the algo buttons
for(var i=0;i<algo.length;i++)
{
  algo[i].addEventListener("click",runalgo); //run algo function execture the corresponding algo
}

function disable_buttons(){
  for(var i=0;i<algo.length;i++)
  {
    algo[i].classList=[];
    algo[i].classList.add("butt_locked");
    algo[i].classList.add("btn");
    algo[i].disabled=true;
    inp_as.disabled=true;
    inp_gen.disabled=true;
    inp_aspeed.disabled=true;
  }
}

function runalgo()
{
    disable_buttons();
    this.classList.add("butt_selected");
    switch(this.innerHTML)
    {
        case "Bubble Sort":bubble();
                        break;
        case "Selection Sort":selection();
                        break;
        case "Merge Sort":merge();
                        break;
    }

}
