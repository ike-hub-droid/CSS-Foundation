function checkGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else {
        return "F";
    }
}

console.log(checkGrade(90)); // output: A
console.log(checkGrade(85)); // output: B
console.log(checkGrade(75)); // output: C
console.log(checkGrade(65)); // output: F

function isEligibleForDiscount(age, isStudent) {
    if (age < 18 || isStudent) {
        return true;
    } else {
        return false;
    }
}

console.log(isEligibleForDiscount(17, false)); // output: true
console.log(isEligibleForDiscount(20, true)); // output: true
console.log(isEligibleForDiscount(30, false)); // output: false