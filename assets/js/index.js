document.addEventListener('DOMContentLoaded', function() {
  handleCardFlip();
  handleNavScroll();

  function handleNavScroll() {
    document.querySelectorAll('.js-nav-item').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        var idToScrollTo = this.getAttribute('href');
        history.pushState(null, '', idToScrollTo);

        document.querySelector(idToScrollTo).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }

  function handleCardFlip() {
    var cards = document.querySelectorAll('.js-card');

    for (var i = 0; i < cards.length; i++) {
      cards[i].addEventListener('click', function() {
        this.classList.toggle('is-flipped');
      });
    }
  }
});
