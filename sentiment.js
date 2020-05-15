console.log("sentiment is running");

// var title;
// var url;
// var sentimentArray;
// var currentTab;

var theButton = document.getElementById("sentiment");

theButton.addEventListener("click",function(tab) {
    // No tabs or host permissions needed!
    console.log("sentiment is running");
    //getCurrentTab();

    chrome.tabs.executeScript(null, { 
        //file: 'inject.js' ,
        code: 'document.body.style.backgroundColor="green"',
        //file: "d3/d3.min.js",
        //file: "reviews.js"
    });
}, false);

