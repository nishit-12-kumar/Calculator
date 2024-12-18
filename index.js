
const display = document.getElementById("display");

function AppendToDisplay(nums){
    if(display.value == 0) display.value = "";
    display.value += nums;

}
function ClearDisplay(){
    display.value = "0";
}

function Calculate(){
    try{
        display.value = eval(display.value);
    }

    catch(error){
        display.value = "Error";
    }
}
function ClearDisplayOneChar(){
    let a = display.value;
    let b = String(a);
    display.value = b.slice(0,b.length-1);    
}