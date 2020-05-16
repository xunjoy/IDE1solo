// var toggle = false;

// function toggleSwitch() {
//   toggle = !toggle;
//   if (!toggle) { chrome.browserAction.setIcon({ path: "icon_newnews_active.png" }); }
//   else { chrome.browserAction.setIcon({ path: "icon_newnews.png" }); }
// }

// chrome.browserAction.onClicked.addListener(function (tab) { toggleSwitch(); });

// chrome.runtime.onMessage.addListener(
//   function (request, sender, sendResponse) {
//     if (request.greeting == "isActive") { sendResponse({ isToggled: toggle }); }
//   });



//testing get url

// chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
//   let url = tabs[0].url;
//   console.log(tabs[0].url);
//   // use `url` here inside the callback because it's asynchronous!


//   if (tabs[0].url == "bbc.co.uk"){
//     //alert(test);

//     var notif = {
//       type: 'basic',
//       iconUrl: 'icon_newnews_active.png',
//       title: 'This is a news platform',
//       message: 'To prevent information overload, it’s important to be mindful of your mental health and news consumption.'
//   }
  
//   chrome.notifications.create('bbcNotif', notif);
//   };

// });
console.log('background.js is running');

// $(document).ready(function() {
//   if(chrome.notifications){
//     chrome_notification_create();
//     console.log('background.js passed jquery');
//   }
// });



// chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//   var notif = {
//     type: 'basic',
//     iconUrl: 'icon_newnews_active.png',
//     title: 'This is a news platform',
//     message: 'To prevent information overload, it’s important to be mindful of your mental health and news consumption.'
//   }
  
//   if (request.type == "worktimer-notification")
//     chrome.notifications.create('worktimer-notification', notif, function() {console.log('notification is working') });

//   sendResponse();

//   var chrome_notification_create = function notification() {

//     console.log('background notif script')

//     chrome.notifications.create('bbcNotif', notif,function(){console.log('notification is working from within onMessage' + chrome.runtime.lastError)});

//   };
// });



//   var chrome_notification_create = function notification() {

//     console.log('background notif script')

//     var notif = {
//       type: 'basic',
//       iconUrl: 'icon_newnews_active.png',
//       title: 'This is a news platform',
//       message: 'To prevent information overload, it’s important to be mindful of your mental health and news consumption.'
//     }
    

//     chrome.notifications.create('bbcNotif', notif,function(){console.log('notification is working outside')});

//   };
