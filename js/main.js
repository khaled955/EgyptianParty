/// <reference types="../@types/jquery"/>

let textArea = document.querySelector("textarea")
let validatP = document.querySelector("#validate")
let validatSpan = document.getElementById("userLength")
let currentSpanValue = validatSpan.innerHTML
let day = document.getElementById("day")
let hours = document.getElementById("hour")
let minutes = document.getElementById("minutes")
let seconds = document.getElementById("second")





textArea.addEventListener("input",function(){

    validate(this)

})



function validate(element){
    validatSpan.innerHTML =  currentSpanValue - element.value.length
   
   if ( validatSpan.innerHTML < "0") {
   
    validatSpan.innerHTML = "your available character finished"
   }

}








$("#closeSideBtn").on("click",function(){

$(".my-section").animate({width:"0"},500)



})



$("#openSideBtn").on("click",function(){

    $(".my-section").animate({width:"100%"},500)
    

    
})




$(".duration-header").on("click",function(e){
let currentP = $(e.target).next()
$(".duration-paragraph").not(currentP).slideUp()

$(e.target).next().slideToggle()
})




//  time setting start



function upDateTime(){

    let dateNow = new Date()
    let nextDate = new Date("dec 15 , 24")     // time to finish diploma front end
    let dateDifference = nextDate - dateNow
    let secondsTime = Math.trunc(dateDifference / 1000)
    let minutesTime = Math.trunc(dateDifference / 1000 / 60)
let hoursTime = Math.trunc(dateDifference / 1000 / 60 / 60)
let daysTime = Math.trunc(dateDifference / 1000 / 60 / 60 / 24)

day.innerHTML = daysTime
hours.innerHTML = hoursTime
minutes.innerHTML = minutesTime
seconds.innerHTML = secondsTime


}

upDateTime()

setInterval(() => {
   
    upDateTime()

   
}, 1000);



//  time setting End 




//  logic of scroll side bar

$(".side-links li a").on("click",function(){
     let currentSection = $(this).attr("href")
     let sectionSpaceFromTop = $(currentSection).offset().top
     $("html , body").animate({scrollTop: sectionSpaceFromTop},1000)
     
})
  








