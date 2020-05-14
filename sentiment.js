console.log("sentiment is running");

var title;
var url;
var sentimentArray;
var currentTab;

var theButton = document.getElementById("d3js");

theButton.addEventListener("click",function(tab) {
    // No tabs or host permissions needed!
    console.log("sentiment is running");
    getCurrentTab();

    chrome.tabs.executeScript(null, { 
        file: 'inject.js' 
        //code: 'document.body.style.backgroundColor="blue"',
        //file: "d3/d3.min.js",
        //file: "reviews.js"
    });
}, false);

// Injected script returns URL & title and triggers API call and pop-up
chrome.runtime.onMessage.addListener(function (request) {

    console.log("request is " + request.title)
    title = request.title;
    url = request.url;
    getAlchemyInfo(url).then(function() {
      console.log("second then")
      chrome.browserAction.setPopup({tabId: currentTab, popup: 'popup/popup.html'});
      // chrome.extension.onClicked.removeListener();
    });
});