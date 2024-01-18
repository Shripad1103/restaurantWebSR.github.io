const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

gsap.from("#page1 h1",{
	y:100,
	opacity:0,
	delay: 0.8,
	duration:1,
	stagger:0.3
})

gsap.from("#nav-part1 h1",{
	x:100,
	opacity:0,
	delay:0.1,
	duration:0.9,
	stagger:0.3
})

gsap.from("#nav-part2 #anchor",{
	x:-100,
	opacity:0,
	delay:0.6,
	duration:0.9,
	stagger:0.3
})

gsap.from("#nav-part2 #icons",{
	y:-100,
	opacity:0,
	delay:0.6,
	duration:0.9,
	stagger:0.3
})

gsap.from("#page1 #video-container",{
	y:100,
	opacity:0,
	delay:1,
	duration:1,
	stagger:0.3
})

gsap.from("#mid h1",{
	y:100,
	opacity:0,
	delay:3,
	duration:1,
	stagger:0.3
})


// const menu = document.querySelector("#page2 .elem h2");
// const ul = document.querySelector("#page2 .elem ul")

// menu.addEventListener("click",()=>{
// 	var li = document.createElement("li");
// 		li.appendChild(document.createTextNode("Chinese"));
// 		ul.appendChild(li);
// 	var li2 = document.createElement("li");
// 		li2.appendChild(document.createTextNode("Chinese"));
// 		ul.appendChild(li2);
// 	var li3 = document.createElement("li");
// 		li3.appendChild(document.createTextNode("Chinese"));
// 		ul.appendChild(li3);

// })
