function click1() {
	var first = document.getElementById('first');
	first.innerHTML = 'Vy nazhali na pervuiu knopku.';
}
function click2() {
	var elems = document.getElementsByClassName('a');
	for (var i = 0; i < elems.length; i++) {
		elems[i].innerHTML = 'Vy nazhali na vtoruiu knopku.';
	}
}
function click3() {
	var head = document.getElementById('heading');
	for (var i = 0; i < head.length; i++) {
		head[i].innerHTML = 'Tekst pomenialsia.';
	}
}
function clicking1() {
	document.getElementById('img').style.height = '300px';
}
function clicking2() {
	document.getElementById("img").src="https://www.freecodecamp.org/news/content/images/2021/08/javascript-onclick.png";
}
function Function() {
	alert("Page is loaded");
}
function prefer() {
	prefer = document.forms[0].something.value;
	alert("You prefer " + prefer);
}
  $("#hide").click(function(){
    $(".div").hide();
  });
  $("#show").click(function(){
    $(".div").show();
  });  
  $("#fade").click(function(){
    $(".div").fadeToggle();
  });
  $("#animation").click(function(){
    $(".div").animate({left: '250px'});
  });
  $("#go").click(function(){
    $(".div").animate({ left: "+=100px" }, 2000);
  });
  $("#stop").click(function(){
    $(".div").stop();
  });