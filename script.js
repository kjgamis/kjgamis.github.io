document.addEventListener('DOMContentLoaded', function() {
  // modal
  var moreInfo     = document.querySelector('.more_info');
  var closeButton  = document.querySelector('.close');
  var modal        = document.querySelector('.modal');
  var closeButton  = document.querySelector('.close');

  function showModal () {
  modal.style.display = 'block';
  }
  function hideModal() {
  modal.style.display = 'none';
  }

  moreInfo.addEventListener('click', showModal);
  closeButton.addEventListener('click', hideModal);


   $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 500, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
