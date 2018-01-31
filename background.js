// Create the context menu in all possible contexts
chrome.contextMenus.create({
	id: "decode-urls",
	title: "decode URLS",
	contexts: ["all"]	
});

// add a click event listener to context menus
chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if (info.menuItemId == "decode-urls") {
        chrome.tabs.sendMessage(tab.id , {reqFunc: "decodeURLS"});
    }
});