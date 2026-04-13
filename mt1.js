// input box ko select kiya
let celsiusInput = document.getElementById("celsiusInput");

// output text ko select kiya
let output = document.getElementById("output");

// jab user input me kuch type kare tab ye function chalega
celsiusInput.addEventListener("input", function () {

    // input value ko variable me store kiya
    let celsius = celsiusInput.value;

    // agar input blank hai to output me "--" show karenge
    if (celsius === "") {
        output.innerHTML = "Fahrenheit: --";
    } 
    else {
        // formula: F = (C × 9/5) + 32
        let fahrenheit = (celsius * 9/5) + 32;

        // result screen pe show kar diya
        output.innerHTML = "Fahrenheit: " + fahrenheit.toFixed(2);
    }
});

