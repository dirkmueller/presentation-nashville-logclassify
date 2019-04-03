// More info about config & dependencies:
// - https://github.com/hakimel/reveal.js#configuration
// - https://github.com/hakimel/reveal.js#dependencies
Reveal.initialize({
	// Push each slide change to the browser history
	history: true,
	// Specify the average time in seconds that you think you will spend
	// presenting each slide. This is used to show a pacing timer in the
	// speaker view
	defaultTiming: 50,
	// Transition style
	transition: 'fade', // none/fade/slide/convex/concave/zoom

	// If you change these, make sure $slide-width and $slide-height in
	// css/_variables.scss are also updated accordingly:
	width: 1244,
	height: 700,

	margin: 0,

	controls: false, // press C to toggle
	controlsTutorial: true,
	navigationMode: 'linear',

	// Transition speed
	transitionSpeed: 'fast', // default/fast/slow

	// Transition style for full page slide backgrounds
	backgroundTransition: 'concave', // none/fade/slide/convex/concave/zoom

	// Number of slides away from the current that are visible
	viewDistance: 3,

	menu: {
		themes: false,
		transitions: false,
		openButton: false,
		openSlideNumber: true,
		markers: true
	},

	dependencies: [
		{ src: 'plugin/markdown/marked.js' },
		{ src: 'plugin/markdown/markdown.js' },
		{ src: 'plugin/notes/notes.js', async: true },
		{ src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
		{ src: 'reveal.js-menu/menu.js', async: true, condition: function() { return !!document.body.classList; } }
	]
});

Reveal.configure({
	keyboard: {
		// Make 'C' toggle controls
		67: function() {
			Reveal.configure({ controls: ! Reveal.getConfig()['controls'] });
		},
	}
});

// Left/right mouse click to advance to next / previous slides.
if (false) {
	window.addEventListener("mousedown", handleClick, false);
	window.addEventListener("contextmenu", function(e) { e.preventDefault(); }, false);
	function handleClick(e) {
		e.preventDefault();
		if(e.button === 0) Reveal.next();
		if(e.button === 2) Reveal.prev();
	}
}
