$(document).ready(function() {
  $(".items").click(function() {
    if ($(this).find(".explanations").first().hasClass("hide")) {
      $(this).find(".terms").first().addClass("hide");
      $(this).find(".explanations").first().removeClass("hide")
    }
    else {
      $(this).find(".terms").first().removeClass("hide");
      $(this).find(".explanations").first().addClass("hide");
    }
  });
});
