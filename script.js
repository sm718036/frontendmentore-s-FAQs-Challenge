const questions = document.querySelectorAll(".question-container");
const showBtns = document.querySelectorAll(".plus");
const hideBtns = document.querySelectorAll(".minus");
const answers = document.querySelectorAll(".answer");

showBtns.forEach(showbtn=>{
    showbtn.addEventListener("click", (e)=>{
        answers.forEach(answer=>{
            if(answer.classList.contains("show")){
                answer.classList.remove("show");
            }
        })
        hideBtns.forEach(hidebtn=>{
            hidebtn.classList.remove("show");
            showBtns.forEach(showbtn=>{
                showbtn.classList.add("show");
            })
        })
        e.currentTarget.nextElementSibling.classList.add("show");
        e.currentTarget.parentElement.nextElementSibling.classList.add("show");
        e.currentTarget.classList.remove("show");
    })
})

hideBtns.forEach(btn=>{
    btn.addEventListener("click", (e)=>{
        e.currentTarget.classList.remove("show");
        e.currentTarget.previousElementSibling.classList.add("show");
        e.currentTarget.parentElement.nextElementSibling.classList.remove("show");
    })
})