$(".method").hide().prev().click(function () {
  $(this).next().toggle();
})