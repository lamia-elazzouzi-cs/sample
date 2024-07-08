let length;
let width;

function calculateArea() {
    // calculate the rectangle's area to be displayed in the <p>

    length = parseFloat(document.getElementById("length").value);
    width = parseFloat(document.getElementById("width").value);

    let area = length * width;
    document.getElementById("result").innerHTML = `
    The area of the rectangle is: ${area}`;

}