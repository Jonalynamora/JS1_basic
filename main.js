const num1Txt = document.getElementById("num1");
const num2Txt = document.getElementById("num2");
const resultTxt = document.getElementById("sum");
const difTxt = document.getElementById("dif");
const prodTxt = document.getElementById("prod");
const qTxt = document.getElementById("q");
let sum = 0;
function calculate() {
    if(!(num1Txt.value === "" || num2Txt.value === "")) {
        sum = parseInt(num1Txt.value) + parseInt(num2Txt.value);
        resultTxt.innerHTML = sum;

        dif = parseInt(num1Txt.value) - parseInt(num2Txt.value);
        difTxt.innerHTML = dif;

        prod = parseInt(num1Txt.value) * parseInt(num2Txt.value);
        prodTxt.innerHTML = prod;

        q = parseInt(num1Txt.value) / parseInt(num2Txt.value);
        qTxt.innerHTML = q;
    }
}
function clearEntries() {
    num1Txt.value = "";
    num2Txt.value = ""
    resultTxt.innerHTML = "";
    sum = 0;
}