
//alert("making connection to background from panel");
var backgroundPageConnection = chrome.runtime.connect({
    name: "panel"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
});

document.getElementById("changeColor").addEventListener("click", function(event) {
    backgroundPageConnection.postMessage({
      name: 'init',
      tabId: chrome.devtools.inspectedWindow.tabId,
      scriptToInject: 'overlay.js'
    });

})