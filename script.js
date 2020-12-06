function big(element) {
	element.style.fontSize = "23px";
}
function small(element) {
	element.style.fontSize = "20px";
}

/*function change(element){
	var a = element.innerHTML;
	switch(a) {
		case "About Game":
			document.getElementById("img").src = "https://cdn.game.tv/game-tv-content/images_3/83704448608ec1efbd99dea7f539f812/Logo.png";
			document.getElementById("text1").innerHTML = "New RPG game with alternating turns! An original approach to combat!";
			document.getElementById("text2").innerHTML = "The strategic combat system uses skill pooling. The strategic combat system uses skill pooling. When skills of the same star rating are next to each other, their level rises.";
			document.getElementById("text3").innerHTML = "Come up with your own strategy by combining the special skills of the heroes!";

		$("#img").animate({top: '+=25px', opacity: '0'}, "400");
		$("#img").animate({top: '-=25px', opacity: '1'}, "400");
}
*/
function load() {
	$(".text").animate({ opacity: '1' }, "400");
}
$(document).ready(function() {
	$('li').click(function(){
		$(".text").animate({opacity: '0'}, "200");
		$(".text").animate({opacity: '1'}, "200");
	});
});

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

/*
$('img').click(function(){
	$(this).fadeOut(400, function(){
		$(this).attr('src', 'https://sgimage.netmarble.com/images/netmarble/nanagb/20191204/fma51575439438370.jpg').fadeIn(400);
	});
});
*/

function show(state) {
	document.getElementById('window').style.display = state;	
	document.getElementById('show').style.display = state; 		
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

	  // https://www.nautiljon.com/images/description/00/55/1499100385204_image.jpg

	  //https://www.itl.cat/pngfile/big/46-465129_wallpaper-nanatsu-no-taizai-seven-deadly-sins-house.jpg

	  //https://www.nautiljon.com/images/description/00/55/1499100385204_image.jpg

	  
/*	<div id="sec2">
	  	<p style="float: right;">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, saepe. Eum, facilis. Cumque, commodi a?</p>
	  </div>
*/
/*
#sec1{
	width: 70%;
	float: left;
}
#sec2{
	width: 30%;
	margin-left: 70%;
}
#sec3{
	width: 30%;
	margin-left: 70%;
}
#sec4{
	width: 70%;
	float: left;
}
*/

/*
		<div class="text">
			<h1 id="text1">Welcome to the best RPG game on mobile platofrms</h1>
			<p id="text2">Download now and go on an adventure!</p>
			<p id="text3"></p>
		</div>
*/
/*
<div onclick="show('none')" id="show"></div>
		<div id="window">
    		<img class="close" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-close-512.png" alt="close"  onclick="show('none')" width="25px" height="25px">
    		<div class="form">
        		<h2>Registration</h2>
        		<form  name="f1">
            		<input type="text" placeholder="Name" name="name1" class="input">
            		<input type="text" placeholder="Surname" name="name2" class="input">
            		<input type="email" placeholder="Email" name="email1" class="input">
            		<input type="password" placeholder="Password" name="pass1" class="input">
            		<input type="password" placeholder="Confirm the password" name="pass2" class="input">
            		<input type="submit" value="registration" name="sab" class="input">
        		</form>
    		</div>
		</div>

*/