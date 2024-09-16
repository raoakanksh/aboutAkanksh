const texts = ["an aspiring Full Stack Developer.", "a 2 time former Software Engineering intern at Northrop Grumman.", "AWS Certified.", "Done with Intro to Generative certfication.", "an aspiring software engineer."];
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

document.addEventListener('DOMContentLoaded', () => {
    const techIcons = [
        { name: 'React', color: '#61dafb' },
        { name: 'Node.js', color: '#68a063' },
        { name: 'Python', color: '#306998' },
        { name: 'AWS', color: '#232F3E' },
        { name: 'MongoDB', color: '#47A248' },
        // Add more technologies here
    ];

    const grid = document.getElementById('tech-icons-grid');

    techIcons.forEach(tech => {
        const iconContainer = document.createElement('div');
        iconContainer.classList.add('tech-icon');

        const icon = document.createElement('div');
        icon.classList.add('icon');
        icon.style.backgroundColor = tech.color;
        icon.innerHTML = `<i class="fab fa-${tech.name.toLowerCase()}"></i>`;
        
        const name = document.createElement('div');
        name.classList.add('tech-name');
        name.textContent = tech.name;

        iconContainer.appendChild(icon);
        iconContainer.appendChild(name);

        grid.appendChild(iconContainer);
    });
});

