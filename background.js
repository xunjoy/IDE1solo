var theButton = document.getElementById("redder");

theButton.addEventListener("click",function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="red"',
        //file: "overlay.html"
    });

    //chrome.devtools.panels.create("Overlay", "overlay.html");


}, false);