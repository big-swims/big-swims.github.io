$(document).ready(function() {
    // Set end year to copyright
    var copyrightYear = document.getElementById('copyright-current-year');

    if (copyrightYear) {
      copyrightYear.innerHTML = new Date().getFullYear();;
    }

    // Show lessons register or buttons
    var monthAsNumber = new Date().getMonth() + 1,
        lessonsOrPartyContainer,
        registerContainer;

    if (monthAsNumber >= 3 && monthAsNumber <= 6) {
        registerContainer = document.getElementById("register-lessons-container");
        lessonsOrPartyContainer = document.getElementById("lessons-or-party-container");

        lessonsOrPartyContainer.classList.add('d-none');
        registerContainer.classList.remove('d-none');
        registerContainer.classList.add('show');
    }

    console.log(monthAsNumber);
});