// Object to hold information about the current page
console.log("inject.js was triggered")

var pageInfo = {
    "title": document.title,
    "url": window.location.href
  };
  
  console.log(pageInfo);

  // Send the information back to the extension
  chrome.runtime.sendMessage(pageInfo);


    

// chrome.extension.sendMessage({}, function(response) {
//   //code to initialize my extension
// });
  
//   //code to send message to open notification. This will eventually move into my extension logic
//   chrome.runtime.sendMessage({type: "notification", options: { 
//       type: "basic", 
//       iconUrl: chrome.extension.getURL("icon_newnews.png"),
//       title: "Test",
//       message: "Test"
//   }});

// chrome.tabs.query({active: true}, function(tabs){
//   chrome.tabs.executeScript(tabs[0].id,{   //tabs[0].id will give the tab id where extension is opened.
//     file: 'background.js',  // any javascript statement
    
//   });
//   console.log('dom loaded');
//   alert('bbc');
// });
alert('This is a news platform. \n\nTo prevent information overload, it’s important to be mindful of your mental health and news consumption. \n\nLaunch newNews by clicking the icon in your browser');

// chrome.webNavigation.onDOMContentLoaded.addListener(function(tab){
//   console.log('dom loaded');
  // chrome.tabs.executeScript(tab[0].id, { file: 'background.js'},function(){console.log("calling background")});
  

// }, true);
  
  
    
  
    
  
 