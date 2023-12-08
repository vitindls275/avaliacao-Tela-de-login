// confirm("Deseja receber notificações de promoçoes do nosso site? ")

// serviços page
$(".custom-carousel").owlCarousel({
    autoWidth: true,
    loop: true
  });
  $(document).ready(function () {
    $(".custom-carousel .item").click(function () {
      $(".custom-carousel .item").not($(this)).removeClass("active");
      $(this).toggleClass("active");
    });
  });
// fim serviços page  
