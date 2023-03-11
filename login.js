// var element = document.getElementById("password");
// myFunction = (icon) => icon.classList.toggle('fa-eye'),
//     element.type = (element.type == "password") ? "password" : "text"
function showPassword(id, el) {
    let x = document.getElementById(id)
    if (x.type == "password") {
        x.type = "text";
        el.classList.toggle("fa-eye")

        console.log(x.type);
        console.log(el.classList)
    } else {
        x.type = "password";
        el.classList.toggle("fa-eye")
        console.log("else " + x.type);
        console.log("else " + el.classList)
    }
}    
