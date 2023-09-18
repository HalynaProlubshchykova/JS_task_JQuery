$(document).ready(function () {
  $('input[type="checkbox"]').change(function () {
    if ($('input[type="checkbox"]:checked').length >= 3) {
      $('input[type="checkbox"]:not(:checked)').prop("disabled", true);
    } else {
      $('input[type="checkbox"]').prop("disabled", false);
    }
  });
});
