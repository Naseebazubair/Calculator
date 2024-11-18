// function to display content
function displayContent(contents){
    txt.value += contents
}
//clear input
function calClear(){
    txt.value=""
}
// operation
function calOutput(){
    txt.value = eval(txt.value)
    
}
//backspace
function remove(){
    txt.value = txt.value.slice(0,-1)
}