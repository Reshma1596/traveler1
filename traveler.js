document.getElementById('respond').addEventListener('click', function() {
    const travelerName = document.getElementById('Name').value;
    greet(travelerName);
});

function greet(name) {
    const greetingElement = document.getElementById('Greetingsmytraveler');
    if (name.trim() === '') {
        greetingElement.textContent = 'Please enter your name, traveler!';
    } else {
        greetingElement.textContent = `Greetings, ${name}! May your journey be safe.`;
    }
}
