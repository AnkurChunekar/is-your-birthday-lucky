const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");
const closeBtn = document.querySelector(".close-btn");
const notificationAlert = document.querySelector(".notification")

outputBox.style.display = "none";

closeBtn.addEventListener("click", function(){
    closeBtn.style.display = "none";
    notificationAlert.style.display = "none";

})

function isYourBirthdateLucky() {
     var dob = dateOfBirth.value;
     var result = calculateSum(dob);

     outputBox.style.display = "block"; 

if (dateOfBirth.value === "" || luckyNumber.value<=0) {
    outputBox.innerText = "please enter valid values in both feilds😕";
} else {
    if (Number(result) % Number(luckyNumber.value) === 0) {
        outputBox.innerText = "Wow🥳!, your Birthday is Luckiest.";
    } else { 
        outputBox.innerText = "Oops🤷‍♂️! Your birthday is not that lucky!"; }
}
}

function calculateSum(dob) {
    var dob = dob.replaceAll("-", "")
    var sum = Number(0);

    for (let i = 0; i < dob.length; i++) {
        sum = sum + Number(dob.charAt(i));
    }
    return sum;
}

checkButton.addEventListener("click", isYourBirthdateLucky);