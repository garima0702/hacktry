let p2moreInfo = document.querySelectorAll(".info");
Array.from(p2moreInfo).forEach(function(elem){
    elem.addEventListener("click",function(){
        let superParent = elem.parentElement.parentElement;
        console.log(superParent);
        let innerContactBox = superParent.children[0];
        // console.log(superParent.children);
        innerContactBox.style.transform = "scale(1,1)";
    });
});

let p2innerContactBoxBtns = document.querySelectorAll(".inner-contact-box button");
Array.from(p2innerContactBoxBtns).forEach(function(elem){
    elem.addEventListener("click",function(){
        let innerContactBox = elem.parentElement;
        innerContactBox.style.transform = "scale(0,0)";
    });
});

let p2contactbtns = document.querySelectorAll(".ct-btn");
Array.from(p2contactbtns).forEach(function(elem){
    elem.addEventListener("click",function(){
        let contactBoxes = document.querySelectorAll(".contact-boxes");
        Array.from(contactBoxes).forEach(function(elem2){
            if(elem2.classList.contains(elem.innerHTML)){
                elem2.style.display="flex";
            }
            else{
                elem2.style.display="none";
            }
        });
    });
});