var appPrefs = { //default prefs for not-logged-in users
	urlLinkblog: "https://feedland.com/?linkblog=true&" //12/24/23 by DW -- might change to textcaster at some point
	};

var theTabs =  {
	all: {
		name: "All",
		description: "News from all the feeds Dave is following.",
		screenname: "davewiner",
		catname: "All"
		},
	politics: {
		name: "Politics",
		description: "Political news from the feeds Dave is following.",
		screenname: "davewiner",
		catname: "politics"
		},
	tech: {
		name: "Tech",
		description: "Tech news from the feeds Dave is following.",
		screenname: "davewiner",
		catname: "tech"
		},
	podcasts: {
		name: "Podcasts",
		description: "Podcasts that Dave is following.",
		screenname: "davewiner",
		catname: "podcasts"
		},
	bloggers: {
		name: "Bloggers",
		description: "News from an eclectic collection of bloggers.",
		screenname: "davewiner",
		catname: "bloggers"
		},
	dave: {
		name: "Dave",
		description: "News from all of Dave's feeds, hopefully not too much repetition.",
		screenname: "davewiner",
		catname: "dave"
		}
	}

function startup () {
	console.log ("startup");
	const allparams = getAllUrlParams (location.search);
	function deleteTabCallback (tabRec) {
		console.log ("deleteTabCallback: tabRec == " + jsonStringify (tabRec));
		}
	function getInfoTableForTab (tabRec) {
		var htmltext = "";
		function add (s) {
			htmltext += s;
			}
		add ("<table>");
		function addRow (name, flSpan2=false) {
			add ("<tr>");
			if (flSpan2) {
				add ("<td colspan=\"2\">" + tabRec [name] + "</td>");
				}
			else {
				add ("<td>" + name + "</td>");
				add ("<td>" + tabRec [name] + "</td>");
				}
			add ("</tr>");
			}
		addRow ("description", true);
		add ("</table>");
		return (htmltext);
		}
	const options = {
		whereToAppend: $(".divPageBody"),
		containerClass: "divDemoTabsContainer",
		nameActiveTab: allparams.tab,
		theTabs,
		deleteTabCallback,
		getInfoTableForTab
		};
	startNewsProduct (options) 
	}
