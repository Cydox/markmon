$(document).ready(function() {
	var socket = io.connect(location.origin);
		 socket.on("content", function(data){
				 var tempScrollTop = $(window).scrollTop();

				 console.log("got data");

				 $("body").html(data.html);
				 MathJax.Hub.Queue(["Typeset",MathJax.Hub], function() {
					 $(window).scrollTop(tempScrollTop);
				 });
		 });
})
