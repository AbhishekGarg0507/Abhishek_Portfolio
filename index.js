// const toggleBt = document.getElementById("toggleBt");
// const wrapper = document.getElementById("wrapper");
// const header = document.getElementById("header");

// function toggler(){
//     document.onclick = function(e){
//         if(e.target.id !== 'header' && e.target.id !== 'toggleBt' && e.target.id !== 'wrapper'){
//             toggleBt.classList.remove("active");
//             wrapper.classList.remove("active");
//         }
//     }
    
//     toggleBt.onclick =  function () {
//         toggleBt.classList.toggle("active");
//         wrapper.classList.toggle("active");
//     }
// }


/*===================== EMAIL JS ================ */
const contactForm = document.getElementById('contact-form'),
      contactName = document.getElementById('contact-name'),
      contactEmail = document.getElementById('contact-email'),
      contactMessage = document.getElementById('contact-message'),
      errorMessage = document.getElementById('error-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // Check if the field has s value
    if(contactName.value === '' || contactEmail.value === '' || contactMessage.value === '' ){
        // Add and remove color
        errorMessage.classList.remove('color-bule')
        errorMessage.classList.add('color-red')

        // show message
        errorMessage.textContent = 'Write all the input field 📩'
    }else{
        // serviceID - templateID - #form - public
        emailjs.sendForm('service_4onj0rw','template_rg8a34j','#contact-form','DZipIMTmd6EwdV_0H')
            .then(() =>{
                // Show message and add color
                errorMessage.classList.add('color-blue')
                errorMessage.textContent = 'Message sent ✅'

                // Remove message after five seconds
                setTimeout(() =>{
                    errorMessage.textContent = ''
                }, 1000)
            }, (error) =>{
                alert('OOPS! SOMETHING HAS FAILED...', error)
            })

        // To clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactMessage.value = ''
    }
}
contactForm.addEventListener('submit',sendEmail)

//Emailjs end

function revealToSpan(){
    document.querySelectorAll(".reveal")
    .forEach(function (elem){
        let spanParent = document.createElement("span");
        let spanChild = document.createElement("span");
    
        spanParent.classList.add("parent");
        spanChild.classList.add("child");
    
        spanChild.innerHTML = elem.innerHTML;
        spanParent.appendChild(spanChild);
    
        elem.innerHTML = " ";
        elem.appendChild(spanParent);
    })
    }
function cardShow(){
    var showingImage;
    document.querySelectorAll(".work")
    .forEach( function(work){ 
        work.addEventListener("mousemove",function(dets){
            document.querySelector("#cursor").children[dets.target.dataset.index].style.opacity = 1;
            showingImage = dets.target;
            document.querySelector("#cursor").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
            
        })
        work.addEventListener("mouseleave",function(dets){
            document.querySelector("#cursor").children[showingImage.dataset.index].style.opacity = 0;
        })
    })
}
function certificateShow(){
    var show;
    document.querySelectorAll(".certificate").forEach(function(certificate){
        certificate.addEventListener("mousemove",function(dets){
            document.querySelector("#cursorQ").children[dets.target.dataset.index].style.opacity = 1;
            show = dets.target;
            document.querySelector("#cursorQ").children[dets.target.dataset.index].style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
        })
        certificate.addEventListener("mouseleave",function(dets){
             document.querySelector("#cursorQ").children[show.dataset.index].style.opacity = 0;
        })
    })
}

function valueSetter(){
    // gsap.set("#header",{ y:"-100%",opacity:0});
    gsap.set("#HomeSection span .child",{ y:"100%"});
    gsap.set("#HomeSection .arrow",{opacity:0})
    }
    
function loader(){
    var t1 = gsap.timeline();
t1.from("#loader .child span",{
    x:100,
    duration:1,
    stagger:.2,
    // delay:1,
    ease:Power3.easeInOut
})
.to("#loader .parent .child",{
    y:"-100%",
    duration:1,
    ease:Expo.easeInOut
})
.to('#loader',{
    height:0,
    duration:.8,
    ease:Circ.easeInOut
})
.to('#colorDiv',{
    height:"100%",
    duration:.8,
    delay:-.8,
    ease:Circ.easeInOut
})
.to('#white',{
    height:"100%",
    duration:1,
    delay:-.6,
    ease:Circ.easeInOut,
    onComplete:function(){
        animateHome();
    }
})
}
function animateHome(){
    var tl = gsap.timeline();

    tl.to("#HomeSection span .child",{
        y:0,
        duration:1,
        ease:Circ.easeInOut
    })
    // .to("Header",{
    //     y:0,
    //     duration:2,
    //     opacity:1,
    //     ease:Power3.easeInOut
    // })
    .to("#HomeSection .arrow",{
        opacity:1,
        duration:1,
        // delay:5,
        ease:Circ.easeInOut
    })
}
// toggler();
revealToSpan();
valueSetter();
loader();
cardShow();
certificateShow();