function remove_button(element) {
    element.remove()
}
function like() {
    alert("ninja was liked.");
}

let count=0
function change_text(element) {
    if (count%2==0){
        element.innerText = "Logout";
    }else{
        element.innerText = "Login";
    }
    console.log(count);
    count ++;
    
}
