const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const messageElement = document.getElementById('message');

// Event listener for the Yes button
yesBtn.addEventListener('click', () => {
    messageElement.textContent = "Yay! I'm so happy! ❤️";
});

// Event listener for the No button with increased movement speed
noBtn.addEventListener('mouseover', () => {
    const randomX = Math.floor(Math.random() * 300) - 150; // Increased range for X position
    const randomY = Math.floor(Math.random() * 200) - 100; // Increased range for Y position
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

// Function to create snowflakes
function createSnowflakes() {
    const snowContainer = document.querySelector('.snow');
    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const size = Math.random() * 10 + 5; // Random size between 5 and 15
        snowflake.style.width = `${size}px`;
        snowflake.style.height = `${size}px`;
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s
        snowflake.style.animationDelay = `${Math.random() * 5}s`; // Random delay
        snowContainer.appendChild(snowflake);
    }
}

// Call the function to create snowflakes
createSnowflakes();