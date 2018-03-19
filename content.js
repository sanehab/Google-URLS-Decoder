/**
 * Decode urls based on host
 */
function decodeURLS(){
	
	if (location.host === "www.google.com") {
		var htmlCollection;
		htmlCollection = document.getElementsByClassName("wmt-jstable-cell-inner-div");
		
		for (var i = 0, l = htmlCollection.length; i < l; i++) {
			var children = htmlCollection[i].children;
			if (children.length > 0) {
				var spanElm = children[0];
				spanElm.innerText  =  decodeURIComponent(spanElm.innerText);
			}
		}
	}
	
	if (location.host === "analytics.google.com") {
		var htmlCollection;
		htmlCollection = document.getElementsByClassName("ID-item");
		
		
		if (htmlCollection.length === 0)
			htmlCollection = document.getElementsByClassName("_GApu");
		
		for (var i = 0, l = htmlCollection.length; i < l; i++) {
			var elm = htmlCollection[i];
			elm.innerHTML   =  decodeURIComponent(elm.innerHTML);
		}
	}
}

/**
 * A callback function to the keyup event, responsible for creating the 
 * keyboard short-cut for decoding URLS
 * 
 * @param   {Event} e the event object
 */
function decodeShortCut(e) {
	if (e.shiftKey && e.altKey && e.ctrlKey && e.code === "KeyD")
		decodeURLS();
}

// listen for messages from background scripts
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	
	if (sender.id === chrome.runtime.id && request.reqFunc)
		window[request.reqFunc]();
});

document.addEventListener('keyup', decodeShortCut, false);