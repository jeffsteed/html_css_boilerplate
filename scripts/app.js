// Hey Hey Hey
window.onload = function() {
  //alert('Hey Hey Hey');
  statusReport('Hey Hey Hey');

  var username = prompt("What is your name?");
  var mission = prompt("What is your mission?");

  var contentContainer = document.getElementById('content');

  contentContainer.innerHTML = username + " is on a mission to " + mission + ".";
}

function statusReport(message) {
  console.log(message);
  return message;
}
