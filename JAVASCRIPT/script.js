window.addEventListener('scroll',function(){
    // let navbar = document.querySelectorAll(".menu_bar");
    let navbar = document.getElementById("all")
    
    
    if(window.pageYOffset >=142){
        console.log("ok");
        navbar.classList.add('sticky');
    }
    else{
        navbar.classList.remove('sticky');
    }
});