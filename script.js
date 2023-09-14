function init() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });


    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}

init();

var crsr= document.querySelector(".cursor")
var main = document.querySelector(".main")
document.addEventListener("mousemove",function(dets){
   crsr.style.left=(dets.x+5)+"px"
    crsr.style.top=(dets.y+5)+"px"
})
var mainVideoMute=true;
var video= document.querySelector(".page1 video")
video.addEventListener("mouseenter",function(){

    crsr.innerHTML="<p>sound-on</p>"
    crsr.style.height="20px"
    crsr.style.width="80px"
    crsr.style.borderRadius="10%"
    crsr.style.padding="1px"
    crsr.style.mixBlendMode= "normal";
    video.addEventListener("click",function(){
        video.muted=!mainVideoMute;
        mainVideoMute=!mainVideoMute
    })

})
video.addEventListener("mouseleave",function(dets){
    crsr.innerHTML=""
    crsr.style.height="10px"
    crsr.style.width="10px"
    crsr.style.borderRadius="50%"
    crsr.style.padding="0px"
    crsr.style.mixBlendMode= "difference";
    
})












var tl=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
        // markers:true,
        start:"top 27.5%",
        end:"top 0",
        scrub:3
    }

})
tl.to(".page1 h1",{
    x:-90,
  
    
    
},"same_anim");

tl.to(".page1 h2",{
    x:90,
   
},"same_anim");

tl.to(".page1 video",{
    width:"90%"
},"same_anim")



var tl2=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
       
        start:"top -97.5%",
        end:"top 130%",
        scrub:3
    }

})
tl2.to(".main",{
    backgroundColor:"#fff"
});

var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:".main",
       
        start:"top -280%",
        end:"top -320%",
        scrub:3
    }

})

tl3.to(".main",{
    backgroundColor:"#0f0d0d"
})

var boxes=document.querySelectorAll(".box")
boxes.forEach(function(elem){

    elem.addEventListener("mouseenter",function(){
        var att=elem.getAttribute("data-image")
        crsr.style.width="400px"
        crsr.style.height="350px"
        crsr.style.borderRadius="0"
        crsr.style.backgroundImage=`url(${att})` 

    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.height="10px"
        crsr.style.width="10px"
        crsr.style.borderRadius="50%"
        crsr.style.backgroundImage=`none` 
    });

});

var h4s=document.querySelectorAll("#nav h4")
var purple=document.querySelector("#purple");
var h1s=document.querySelector("#purple h1")
h4s.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display="block"
        purple.style.opacity="1"
        console.log(elem.innerHTML);
        h1s.innerHTML=""
       for(var i=0;i<3;i++){
        h1s.innerHTML+=elem.innerHTML+" "
       }
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display="none"
        purple.style.opacity="0"
    })
})

var extras=document.querySelector("#nav-part3 #circle")
extras.addEventListener("mouseenter",function(){
    purple.style.display="block"
    purple.style.opacity="1"
    h1s.innerHTML=""
   for(var i=0;i<3;i++){
    h1s.innerHTML+="Extras "
   }
})
extras.addEventListener("mouseleave",function(){
    purple.style.display="none"
    purple.style.opacity="0"
})
