
document.addEventListener("DOMContentLoaded", function () {
  const elem = document.querySelector('.main-carousel');
  const flkty = new Flickity(elem, {
    cellAlign: 'left',
    wrapAround: true,
    freeScroll: true,
    autoPlay: true,
    autoPlay: 2000
  })

  const emailInput = document.getElementById("subscribe-form-input");

  document.querySelector(".subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    
    if (emailInput.value === "") {
      alert("Please enter a valid email address");
    } else {
      alert("Thanks for subscribing!");
    }
  });
}
);