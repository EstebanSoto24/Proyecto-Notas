
document.getElementById("login").addEventListener("click", function(e){
    document.getElementById("cajaLogin").style.display = "flex";
    document.getElementById("cajaCreateAccount").style.display = "none";
})

document.getElementById("createAccount").addEventListener("click", function(e){
    document.getElementById("cajaLogin").style.display = "none";
    document.getElementById("cajaCreateAccount").style.display = "flex";
})