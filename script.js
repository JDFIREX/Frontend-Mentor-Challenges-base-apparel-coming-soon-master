window.addEventListener('resize', () => {
    heroImg()
});
window.addEventListener('load',heroImg());

function heroImg(){
    if(window.innerWidth > 1000){
        document.querySelector(".main_img").src = "images/hero-desktop.jpg";
    }else if( window.innerWidth <= 1000){
        document.querySelector(".main_img").src = "images/hero-mobile.jpg";
    }
}

let input  = document.querySelector("#email");
let Submit =  document.querySelector(".submit")
Submit.addEventListener("click", (e) => {
    inputCheck(e);
})

function inputCheck(e){
    let value = input.value;

    let regex = new RegExp(/[a-z][@]/gi);
    let result = [];
    result.push(regex.test(value));
    value.includes(".") ? result.push(true) : result.push(false)

    result = result.every( a => a == true)

    let error = document.querySelector('.error');
    let errorMess = document.querySelector(".error_mess");
    
    if(!result){
        error.style.visibility = "visible";
        errorMess.style.visibility = "visible";
    }else{
        error.style.visibility = "hidden";
        errorMess.style.visibility = "hidden";
        alert("correct")
        window.location.reload()
    }  
}