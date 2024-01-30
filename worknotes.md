#### 1/30/24; 2:05:37 PM by DW

You can now add a "include" element at the top level of your spec.

Like the others it can be a string or an array of strings.

The strings are URLs of files you want included.

They can be either style or code. That is, have .css or .js extensions. You can have as many as you want.

We read each one, in the order they appear in the array, and add them either as &lt;style> or &lt;script> to the head section of the template for news products.

{	"title": "Hooray For Feeds!",	"description": "They're pretty freaking fantastic!!!!",	"image": "https://imgs.scripting.com/2023/12/24/slugger.png",	"include": [		"https://s3.amazonaws.com/scripting.com/code/newsproducthome/includes/test.js",		"https://s3.amazonaws.com/scripting.com/code/newsproducthome/includes/test.css"		],	"script": "console.log ('Hello World')",	"style": [		".divProductTagline {font-style: italic}",		".divProductTagline {color: purple}"		],	"tabs": {		"tech": {			"name": "Tech",			"description": "Tech news from the feeds Dave is following.",			"screenname": "davewiner",			"catname": "tech"			},		"politics": {			"name": "Politics",			"description": "Political news from the feeds Dave is following.",			"screenname": "davewiner",			"catname": "politics"			},		"podcasts": {			"name": "Podcasts",			"description": "Podcasts that Dave is following.",			"screenname": "davewiner",			"catname": "podcasts"			},		"dave": {			"name": "Dave",			"description": "News from all of Dave's feeds, hopefully not too much repetition.",			"screenname": "davewiner",			"catname": "dave"			},		"bloggers": {			"name": "Bloggers",			"description": "News from an eclectic collection of bloggers.",			"screenname": "davewiner",			"catname": "bloggers"			},		"all": {			"name": "All",			"description": "News from all the feeds <i>Dave</i> is following.",			"screenname": "davewiner",			"catname": "All"			}		}	}

#### 12/30/23; 10:12:26 AM by DW

Added support for script and style configuration from the JSON file. 

