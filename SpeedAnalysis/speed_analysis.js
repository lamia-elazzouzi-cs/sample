let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;


function startTest() {
    // set the test text
    document.getElementById("inputText").value = testText;

    // reset the timer and result output
    startTime = new Date().getTime();
    document.getElementById("output").innerHTML = "";
    document.getElementById("userInput").innerHTML = "";
    
    // change button's text and functionality
    let endButton = document.getElementById("endBtn");
    endButton.innerHTML = "Click to end test";
    endButton.onclick = endTest;
    document.getElementById("startBtn").innerHTML = "...";
}


function endTest() {

    // get endTime for the test and disable user input
    endTime = new Date().getTime();
    document.getElementById("userInput").readOnly = true;

    // calculate the test duration and words per minutes (WPM)
    var timeElapsed = (endTime - startTime) / 1000; //get seconds
    var userTypedText = document.getElementById("userInput").value;

    // split the text using regex to correctly count the words
    // the regular expression considers words separated by spaces/tabs/newlines. 
    // Filtering ensures we're counting valid words, excluding empty strings.
    var nbrOfTypedWords = userTypedText.split(/\s+/).filter(
        function (word) { return word !== ""; }
    ).length;

    // set WordsPerMinute to default value
    var wpm = 0;

    if (timeElapsed !== 0 && !isNaN(nbrOfTypedWords)) {
        wpm = Math.round((nbrOfTypedWords / timeElapsed) * 60);
    }

    // display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
        <h2>Your typing results:</h2>
        <p>Words types: ${nbrOfTypedWords}</p>
        <p>Time elapsed: ${timeElapsed.toFixed(2)} seconds</p>
        <p>Words per Minutes: ${wpm} (WPM)</p>
    `;

    // reset the buttons
    var endButton = document.getElementById("endBtn");
    endButton.onclick = startTest;
    
    var startButton =  document.getElementById("startBtn");
    startButton.innerHTML = "Retake the test";
}