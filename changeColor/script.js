const rect = document.querySelector("#container")

rect.addEventListener("mousemove",function(details){
    var rectLocation = rect.getBoundingClientRect()
    var insideRectVal=(details.clientX - rectLocation.left)
    if(insideRectVal < rectLocation.width / 2){
        var redColor = gsap.utils.mapRange(0,rectLocation.width/2,255,0,insideRectVal)
        gsap.to(rect,{
            backgroundColor : `rgb(${redColor},0,0)`,
            ease : Power4,
            duration :1
        })
    }else{
        var blueColor = gsap.utils.mapRange(rectLocation.width/2,rectLocation.width,0,255,insideRectVal)
        gsap.to(rect,{
            backgroundColor : `rgb(0,0,${blueColor})`,
            ease : Power4,
            duration :1
        })
        // console.log('right')
    }
})

rect.addEventListener('mouseleave',function(){
    gsap.to(rect,{
        backgroundColor :" white"
    });
});
