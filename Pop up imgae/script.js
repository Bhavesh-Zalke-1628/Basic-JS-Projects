const btn=document.querySelector("#throttle");
     
// Throttling Function
const throttleFunction=(func, delay)=>{
  let prev = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - prev> delay){
      prev = now;
      return func(...args); 
    }
  }
}
document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets)=>{
  // your less repeatation code
  var div =  document.createElement("div");
  div.classList.add('imageDiv');
  div.style.left = dets.clientX + "px"
  div.style.top = dets.clientY + "px"
  var img =  document.createElement("img");
  img.setAttribute("src","https://images.unsplash.com/photo-1694845482698-accfce9310f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=500&q=60")
  div.appendChild(img)
  document.body.appendChild(div);

  gsap.to(img,{
    y: '0',
    ease : Power1,
    duration : .6
  })

  gsap.to(img,{
    y: '100%',
    delay : .6,
    ease : Power2,
    duration : .2
  })


  setTimeout(() => {
    div.remove()
  }, 1000);
}, 500));
