// var element = document.getElementById("password");
// myFunction = (icon) => icon.classList.toggle('fa-eye'),
//     element.type = (element.type == "password") ? "password" : "text"
function showPassword(id, el) {
    let x = document.getElementById(id)
    if (x.type == "password") {
        x.type = "text";
        el.classList.toggle("fa-eye")

        console.log("if " + x.type)
        console.log("if " + el.classList[2])
    } else {
        x.type = "password";
        el.classList.toggle("fa-eye")
        console.log("else " + x.type);
        console.log("else " + el.classList)
    }
}    
