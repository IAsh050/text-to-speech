const text =
    document.getElementById("texttoconvert");
const convertBtn =
    document.getElementById("convertBtn");

convertBtn.addEventListener('click', function () {
    const speechSynth = window.speechSynthesis;
    const enteredText = text.value;
    const error = document.querySelector('.error-para');

    if (!speechSynth.speaking &&
        !enteredText.trim().length) {
        error.textContent = `Nothing to convert!
                Enter Text in the text area.`
    }
    if (!speechSynth.speaking && enteredText.trim().length) {
        error.textContent = "";
        const newUtter =
            new SpeechSynthesisUtterance(enteredText);
        speechSynth.speak(newUtter);
        convertBtn1.textContent = "Sound is Playing..."
    }
    if(!speechSynth.pause)
    setTimeout(() => {
        convertBtn1.textContent = "Play Converted Sound"
    }, 5000);
})
