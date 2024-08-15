//display number in the box

function displayNumber(num){
    result.value+=num;
}
//ac to clear the box
function clearBox(){
    result.value=""
}
//calculation
function evaluateExp(){
    //method 1

    // exp=result.value
    // output=eval(exp)
    // result.value=output

    //method 2

    result.value=eval(result.value)
}
//delete last item
function removeLastItem(){
    result.value=result.value.slice(0,-1)
}