
chrome.runtime.onConnect.addListener(function(devToolsConnection) {
    //alert("inside background.js -- onConnect");
      // assign the listener function to a variable so we can remove it later
      var devToolsListener = function(message, sender, sendResponse) {
        //alert("injecting Content Script");
          // Inject a content script into the identified tab
          if (message.name == "init") {
              
            //alert("injecting Content Script - inside init");
              //alert("tab ID " + message.tabId) ;
              //alert("message.scriptToInject: " + message.scriptToInject) ;
              
              
              chrome.tabs.executeScript(message.tabId,
              {file: message.scriptToInject });
          }
  
      }
      // add the listener
      devToolsConnection.onMessage.addListener(devToolsListener);
  
      devToolsConnection.onDisconnect.addListener(function() {
           devToolsConnection.onMessage.removeListener(devToolsListener);
      });
  })