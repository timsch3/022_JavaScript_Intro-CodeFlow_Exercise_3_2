function changeColor() {
    let redValue = document.getElementById("red").value;
    let greenValue = document.getElementById("green").value;
    let blueValue = document.getElementById("blue").value;
    document.body.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")"
}