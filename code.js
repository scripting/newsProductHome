var appPrefs = { //default prefs for not-logged-in users
	urlLinkblog: "https://feedland.com/?linkblog=true&" //12/24/23 by DW -- might change to textcaster at some point
	};

var theTabs =  {
	all: {
		name: "All",
		description: "News from all the feeds Dave is following..",
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

function getOpmlUrl (screenname, catname) {
	function encode (s) {
		return (encodeURIComponent (stringLower (s)));
		}
	var url = "https://feedland.com/opml?screenname=" + encode (screenname) + "&catname=" + encode (catname);
	return (url);
	}
function getCodeFromSpec (specElement) {
	var scripttext = "";
	if (Array.isArray (specElement)) {
		specElement.forEach (function (s) {
			scripttext += s + "\n";
			});
		}
	else {
		scripttext = specElement.toString ();
		}
	return (scripttext);
	}
function insertCustomStyles (theStyles) {
	if (theStyles !== undefined) {
		$("head").append ($("<style>" + getCodeFromSpec (theStyles) + "</style>"));
		}
	}
function insertStartupScript (theScript) {
	if (theScript !== undefined) {
		$("head").append ($("<script>" + getCodeFromSpec (theScript) + "</script>"));
		}
	}
function httpsOnly () { //redirect to https if http
	if (location.host != "localhost:1452") {
		if (location.host != "localhost:1340") {
			if (location.protocol == "http:") {
				let newhref = "https" + stringDelete (location.href, 1, 4);
				location.href = newhref;
				return; //1/10/24 by DW
				}
			}
		}
	hitCounter ();
	}

function startup () {
	console.log ("startup");
	console.log ("startup: appConsts == " + jsonStringify (appConsts)); 
	console.log ("startup: theNewsProductSpec == " + jsonStringify (theNewsProductSpec)); 
	
	function clickOpmlIcon () {
		const theTab = myTabs.getActiveTab ();
		const url = getOpmlUrl (theTab.screenname, theTab.catname);
		window.open (url);
		}
	
	httpsOnly (); //redirect to https if http
	
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
		whereToAppend: $(".divNewsProduct"),
		nameActiveTab: allparams.tab,
		flCloseBoxes: true,
		flCloseBoxesJustBeep: true, //want them visible, but want them to do nothing but beep
		theTabs,
		deleteTabCallback,
		getInfoTableForTab,
		tabClickCallback: function (tabRec) { //12/31/23 by DW
			console.log ("tabClickCallback: tabRec == " + jsonStringify (tabRec));
			hitCounter ();
			}
		};
	
	if (theNewsProductSpec !== undefined) { //12/28/23 by DW
		options.theTabs = theNewsProductSpec.tabs;
		}
	
	const myTabs = new tabsManager (options);
	
	insertCustomStyles (theNewsProductSpec.style);
	insertStartupScript (theNewsProductSpec.script);
	
	$(".divXmlIcon").click (clickOpmlIcon);
	}
