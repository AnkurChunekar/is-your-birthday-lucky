const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

outputBox.style.display = "none";

function isYourBirthdateLucky() {
    var dob = dateOfBirth.value;
    var result = calculateSum(dob);
    

    if (dob&&result){
    outputBox.style.display = "block";
    if (Number(result) % Number(luckyNumber.value) === 0) {
        outputBox.innerText = "Woah!!, your Birthday is Luckiest.";

    } else { outputBox.innerText = "Oops! Your birthday is not that lucky!"; }
    
} else {outputBox.style.display = "block"; 
    outputBox.innerText = "please enter both values"; }

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