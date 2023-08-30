var isStatus =  document.querySelector("h5")

var btn = document.querySelector("#add")

var chacek = 0

btn.addEventListener("click",function(){
    if(chacek == 0){
        isStatus.innerHTML = "Friend"
        isStatus.style.color = "green"
        btn.innerHTML = "Remove"
        chacek = 1 
    }
    else{
        isStatus.innerHTML = "Strenger"
        isStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        chacek = 0
    }
})
