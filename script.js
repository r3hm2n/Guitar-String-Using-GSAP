var initialPath = "M 10 80 Q 250 80 990 80";
var finalPath = "M 10 80 Q 250 80 990 80";

let string = document.querySelector("#string");

string.addEventListener("mousemove", function(delts){
    if (delts.y > 80) {
        let path = `M 10 80 Q ${delts.x} ${delts.y} 990 80`;

        gsap.to("svg path", {
            attr: { d: path },
            ease: "power3.out"
        });
    }
});

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr: { d: finalPath },
        ease: "elastic.out(1.0.2)"
    });
});