const texts = ["I am a Full Stack Developer.", "I am AWS Certified."];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0; // Reset to keep looping
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // Wait for 2 seconds before starting the next text
    } else {
        setTimeout(type, 100); // Typing speed
    }
})();
