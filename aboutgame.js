function big(element) {
	element.style.fontSize = "23px";
}
function small(element) {
	element.style.fontSize = "20px";
}
function load() {
	$(".text").animate({opacity: '1'}, "400");
}


function popup(){
    var btn = document.getElementById("btn_white").innerHTML;
    if(btn == "Log In"){
        document.querySelector(".popup").style.display = "flex";
        $(".popup").animate({opacity: "1"}, "slow");
        document.body.style.overflow = "hidden";
    }
    else{
        logout();
    }
}

function close_popup(){
    $(".popup").animate({opacity: "0"}, "slow");
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
}

function login(name){
    document.querySelector(".user_profile").style.display = "inline";
    document.getElementById("user_name").innerHTML = name;
    document.getElementById("btn_white").innerHTML = "Log Out";
    close_popup();
}

function logout(){
    document.querySelector(".user_profile").style.display = "none";
    document.getElementById("btn_white").innerHTML = "Log In";
}


	//scroll Down/Up
	$(document).ready(function(){
		// Add smooth scrolling to all links
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
			}, 800, function(){
		 
			  // Add hash (#) to URL when done scrolling (default click behavior)
			  window.location.hash = hash;
			});
		  } // End if
		});
	  });
