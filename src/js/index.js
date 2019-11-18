import $ from 'jquery';
import * as popper from 'popper.js';
import * as bootstrap from 'bootstrap';
require("../css/styles.css");
$(document).ready(function whenDocumentIsReady () {
  console.log('Everything is working');
  $("#carouselButton").click(function playOrPauseCarousel() {
    if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-pause")
    ) {
      $("#mycarousel").carousel("pause");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-pause");
      $("#carouselButton")
        .children("span")
        .addClass("fa-play");
    } else if (
      $("#carouselButton")
        .children("span")
        .hasClass("fa-play")
    ) {
      $("#mycarousel").carousel("cycle");
      $("#carouselButton")
        .children("span")
        .removeClass("fa-play");
      $("#carouselButton")
        .children("span")
        .addClass("fa-pause");
    }
  });

  // Login modal
  $("#loginLink").click(function openLoginModal() {
    $("#loginModal").modal();
  });

  // Reserve Table Modal
  $('#reservationButton').click(function openReservationTableModal() {
    $('#reservationModal').modal();
  })
});
