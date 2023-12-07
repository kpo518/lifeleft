function lifeCalculator(age) {
    var maxAge = 90;
    var daysInYear = 365;
    var monthsInYear = 12;
    var weeksInYear = 52;

    var yearsLeft = maxAge - age;
    var monthsLeft = yearsLeft * monthsInYear;
    var weeksLeft = yearsLeft * weeksInYear;
    var daysLeft = yearsLeft * daysInYear;

    document.getElementById('result').innerHTML ="You have a approximately  " + yearsLeft + " years, " + monthsLeft + " months, " + weeksLeft + " weeks, and " + daysLeft + " days left to make the most of your journey.";

}

function calculateLife() {
    var age = document.getElementById('age').value;
    lifeCalculator(age);
}


document.addEventListener('DOMContentLoaded', function () {
    var element = document.querySelector('.life h1');
    var text = element.innerText;

    // Clear existing text
    element.innerText = 'Life Left Calculator';

    // Create a container span for the typing animation
    var containerSpan = document.createElement('span');
    containerSpan.className = 'typing-container';
    element.appendChild(containerSpan);

    // Create spans for each character
    text.split('').forEach(function (char) {
        var span = document.createElement('span');
        span.textContent = char;
        containerSpan.appendChild(span);
    });

    // Add the typing animation to the container span
    containerSpan.style.animation = 'typing 1s forwards';

    // Gradually reveal the text by increasing opacity
    setTimeout(function () {
        containerSpan.style.opacity = 1;
    }, 500); // Adjust the delay as needed

    // Add a blinking cursor after the typing animation
    containerSpan.addEventListener('animationend', function () {
        var cursorSpan = document.createElement('span');
        cursorSpan.textContent = '|';
        cursorSpan.style.animation = 'blinkCursor 0.8s infinite alternate';
        containerSpan.appendChild(cursorSpan);
    });
});

