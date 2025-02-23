$(document).ready(function() {
    // Set end year to copyright
    var copyrightYear = document.getElementById('copyright-current-year');

    if (copyrightYear) {
      copyrightYear.innerHTML = new Date().getFullYear();;
    }

    // Show lessons register or buttons
    var monthAsNumber = new Date().getMonth() + 1,
        lessonsOrPartyContainer,
        registerContainer,
        registerButton;

    if (monthAsNumber >= 2 && monthAsNumber <= 8) {
        registerContainer = document.getElementById("register-lessons-container");
        lessonsOrPartyContainer = document.getElementById("lessons-or-party-container");
        registerButton = document.getElementById("register-lessons-button")

        lessonsOrPartyContainer.classList.add('d-none');
        registerContainer.classList.remove('d-none');
        registerButton.classList.remove('d-none');
        registerContainer.classList.add('show');
    }
});