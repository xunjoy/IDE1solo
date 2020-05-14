var theButton = document.getElementById("d3js");

theButton.addEventListener("click",function(tab) {
    // No tabs or host permissions needed!
    console.log('Turning ' + tab.url + ' red!');
    chrome.tabs.executeScript({
        code: 'document.body.style.backgroundColor="blue"',
        //file: "d3/d3.min.js",
        //file: "reviews.js"
    });

    
}, false);