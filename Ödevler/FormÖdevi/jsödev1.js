function checkPositiveOrNegative(number) {
    if (number > 0) {
        return "Pozitif";
    } else if (number < 0) {
        return "Negatif";
    } else {
        return "Sıfır";
    }
}

let userNumber = parseFloat(prompt("Bir sayı giriniz:"));
let result = checkPositiveOrNegative(userNumber);
console.log("Girilen sayı " + result + "dir.");



