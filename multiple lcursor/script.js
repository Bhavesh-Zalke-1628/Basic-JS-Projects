var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){

    val.addEventListener("mouseenter",() => {
        val.childNodes[1].style.opacity = 1
    })
    val.addEventListener("mouseleave",() => {
        val.childNodes[1].style.opacity = 0
    })
    val.addEventListener("mousemove",(dets) => {
        val.childNodes[1].style.left =dets.x+"px"
        val.childNodes[1].style.top =dets.y+"px"
    })
});

// elem1.addEventListener("mousemove",function(dets){
//     // elem1Image.style.opacity = 1
// })

// elem1.addEventListener("mouseenter",function(dets){
//     elem1Image.style.opacity = 1
// })
// elem1.addEventListener("mouseleave",function(dets){
//     elem1Image.style.opacity = 0 
// })
