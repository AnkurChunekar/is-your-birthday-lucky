const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkButton = document.querySelector("#check-btn");
const outputBox = document.querySelector("#output-box");

function isYourBirthdateLucky() {
    var dob = dateOfBirth.value;
    var result = calculateSum(dob);

    if (Number(result) % Number(luckyNumber.value) === 0) {
        outputBox.innerText = "yess";

    } else { outputBox.innerText = "noooo"; }
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