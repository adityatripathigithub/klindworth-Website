gsap.from("page1,img",{
    // y:600,
    duration:1,
    delay:1,
    top:"80%",
    width: "30%",    
    scrollTrigger:{
        trigger:".page1",
        scroller:"body",
        start:"top",
        end:"bottom 10%",
        // markers:true,
        scrub:2,
        pin:true
        
    }   
})

gsap.from(".page2 .box1",{
    duration:1,
    markers:true,
    height: "0%",
    scrollTrigger:{
        trigger:".page2 ,.box1",
        scroller:"body",
        start:"top -10%",
        end:"top -200%",
        markers:true,
    }   
})

gsap.from(".page2 .box2",{
    duration:1,
    markers:true,
    height: "0%",
    scrollTrigger:{
        trigger:".page2 ,.box2",
        scroller:"body",
        start:"top -10%",
        end:"top -200%",
        markers:true,
    }   
})


gsap.to(".page3 #img1",{
    scale:0.99,
    filter: 'brightness(0.9)',

    scrollTrigger:{
        trigger:"#img1",
        scroller:"body",
        start:"top 10",
        end:"top-500",
        scrub:3
    }
    
})

gsap.to(".page3 #img2",{
    scale:0.99,
    filter: 'brightness(0.9)',
    scrollTrigger:{
        trigger:"#img2",
        scroller:"body",
        start:"top 10",
        end:"top-1000",
        scrub:3
    }
    
})

gsap.to(".page3 #img3",{
    scale:0.99,
    filter: 'brightness(0.9)',
    scrollTrigger:{
        trigger:"#img3",
        scroller:"body",
        start:"top 10",
        end:"top-1500",
        scrub:3
    }
    
})

