$(document).ready(function () {
  $("h3").each(function () {
    let nextDiv = $(this).next("div");
    if (nextDiv.length > 0) {
      $(this).before(nextDiv);
    }
  });
});
