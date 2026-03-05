function showMessage() {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = "Thanks and Welcome to our Group Landing page Assignment! 🚀";
}


function setupMenuToggle() {
    const burger = document.querySelector('.hamburger');
    const links = document.querySelector('.nav-links');
    if (burger && links) {
        burger.addEventListener('click', () => {
            links.classList.toggle('active');
        });
    }
}

document.addEventListener('DOMContentLoaded', setupMenuToggle);
