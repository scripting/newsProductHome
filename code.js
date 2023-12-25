function startNewsProduct (userOptions) {
	console.log ("startNewsProduct");
	
	var options = {
		flCloseBoxes: false,
		whereToAppend: $(".divPageBody")
		};
	for (var x in userOptions) {
		if (userOptions [x] !== undefined) {
			options [x] = userOptions [x];
			}
		}
	
	tabsManager (options);
	}
