$(document).ready(() => {
  $(".copied-popup").hide();
});

// create a temporary element to be copied to clipboard
function copyEmailToClipboard(e) {
  $(".copied-popup").fadeIn("slow").delay(400).fadeOut("fast");
  let element = document.createElement("textarea");
  element.value = "relenalai@utexas.edu";
  document.body.appendChild(element);
  element.select();
  document.execCommand("copy");
  document.body.removeChild(element);
}
