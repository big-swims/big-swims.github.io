"use strict";

$(document).ready(function () {
  // Set end year to copyright
  var copyrightYear = document.getElementById('copyright-current-year');

  if (copyrightYear) {
    copyrightYear.innerHTML = new Date().getFullYear();
    ;
  }
});