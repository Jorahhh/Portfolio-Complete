
/*Scrolling Reveal*/
function Scrolling(){
    ScrollReveal().reveal(".navBar", {delay: 100})
    ScrollReveal().reveal(".text-section", {delay: 100})
    ScrollReveal().reveal(".primarySquare", {delay: 200})
    ScrollReveal().reveal(".self-section", {delay: 200})
    ScrollReveal().reveal(".photo-section", {delay: 200})
    ScrollReveal().reveal(".square", {delay: 400})
    ScrollReveal().reveal("#S1", {delay: 500})
    ScrollReveal().reveal("#S2", {delay: 600})
    ScrollReveal().reveal("#S3", {delay: 700})
    ScrollReveal().reveal(".heading_project", {delay: 100})
    ScrollReveal().reveal(".projects", {delay: 200})
    ScrollReveal().reveal(".square_project", {delay: 400})
    ScrollReveal().reveal(".labelProject1", {delay: 200})
    ScrollReveal().reveal(".portfolio_button", {delay: 300})



    /*Portfolio Section*/

    ScrollReveal().reveal(".texts_portfolio", {delay: 200})
    ScrollReveal().reveal(".body1", {delay: 100})
    ScrollReveal().reveal(".imagePortfolio", {delay: 200})
    ScrollReveal().reveal(".imagePortfolioSq", {delay: 300})
    ScrollReveal().reveal(".labelPortfolio", {delay: 300})
    ScrollReveal().reveal(".portfolio_btn", {delay: 300})
    ScrollReveal().reveal(".linesPortfolio1", {delay: 600})
    ScrollReveal().reveal(".linesPortfolio2", {delay: 700})
    ScrollReveal().reveal(".linesPortfolio3", {delay: 800})
    ScrollReveal().reveal(".body2", {delay: 100})
    ScrollReveal().reveal(".body3", {delay: 100})

}


/*HAMBURGER MENU*/

function hambMenu() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () =>{
        hamburger.classList.toggle("active")
        navMenu.classList.toggle("active")
    })

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
    }))
}



/*About Section*/

function btnPlus(){
    const plusIcon = document.getElementById("plus");
    const aboutActive = document.getElementById('about_overlay');


    plusIcon.addEventListener("click", () =>{
        plusIcon.classList.toggle('active')
        if(plusIcon.classList.contains('active')){
            aboutActive.classList.toggle('active')
        }else {
            aboutActive.classList.remove('active')
        }

    })
}

/*projects overlay*/
function overlayOnProjects(){
    const project = document.getElementById("project");
    const shadowImage = document.getElementById("image1_project");
    const projOverlay =document.getElementsByClassName("proj_overlay")[0];

    project.addEventListener("mouseover", () =>{
        projOverlay.classList.toggle("active");
        if(projOverlay.classList.contains("active")){
            shadowImage.style.boxShadow =  "14px 12px var(--black)";
        }
    })

    project.addEventListener("mouseout", () =>{
        projOverlay.classList.remove('active');
        shadowImage.style.boxShadow = "none";

    })
}

Scrolling();
hambMenu();
btnPlus();
overlayOnProjects();












