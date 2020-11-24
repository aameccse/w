setTimeout(function() {
    $("#myForm").modal('show');
    $("#bn").css("background-color", "red");
    $("#bn").html("<i class='fa fa-close'></i> Close");
}, 3000);



// Get the modal
var modal = document.getElementById("myForm");

// Get the button that opens the modal
var btn = document.getElementById("bn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("sclose")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
if (modal.style.display === "none") {modal.style.display = "block";
  document.getElementById("bn").style.background = "red";
     document.getElementById("bn").innerHTML = "<i class='fa fa-close'></i> Close";
  } 
  else 
  {modal.style.display = "none";
    document.getElementById("bn").style.background = "#4CAF50";
    document.getElementById("bn").innerHTML = "<i class='fa fa-whatsapp'></i> Reach Us Now";    
  } 
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  document.getElementById("bn").style.background = "#4CAF50";
    document.getElementById("bn").innerHTML = "<i class='fa fa-whatsapp'></i> Reach Us Now";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("bn").style.background = "#4CAF50";
    document.getElementById("bn").innerHTML = "<i class='fa fa-whatsapp'></i> Reach Us Now";
  }
}
