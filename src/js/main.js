
window.onload = function() {
	var testWaypoint = new Waypoint({
		element: document.querySelector('.america-spends'),
		handler: function(direction) {
			console.log('bottom')
	  },
	  offset: 'bottom-in-view'
	});

	var moneyPileWaypoint = new Waypoint({
		element: document.querySelector('.america-spends'),
		handler: function(direction) {
			document.querySelector(".moneyone").classList.add("uk-drops1");
			document.querySelector(".moneytwo").classList.add("uk-drops2");
			document.querySelector(".moneythree").classList.add("us-drops1");
			document.querySelector(".moneyfour").classList.add("us-drops2");
			document.querySelector(".moneyfive").classList.add("us-drops3");
			document.querySelector(".moneysix").classList.add("us-drops4");
	  },
	  offset: 'bottom-in-view'
	});

	// var graphLineWaypoint = new Waypoint({
	// 	element: document.querySelector('.graph'),
	// 	handler: function(direction) {
	// 		console.log("6513")
	// 		document.querySelector(".red-line-cover-box").classList.add("animate")
			
	//   },
	//   offset: 'bottom-in-view'
	// });
}

