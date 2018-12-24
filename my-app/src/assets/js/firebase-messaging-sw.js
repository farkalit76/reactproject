// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase.js');
importScripts('https://www.gstatic.com/firebasejs/4.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': '103953800507'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
var bundleid;
//This Handler is not working for background.
messaging.setBackgroundMessageHandler(function(payload) {
  var response;
  try {
    response = JSON.parse(payload.notification.body);
    event.ports[0].postMessage({
      "message": response
    });
  }catch (e) {
    response = payload.notification.body;
    event.ports[0].postMessage({
      "message": response
    });
  }
  // Customize notification here
  const notificationTitle = 'Hi from Neo';
  const notificationOptions = {
    body: 'Request your attention',
    icon: 'https://ui.programneo.com/assets/images/logo/logo.png'
  };
  var redirectUri = 'https://neoui.programneo.com/neo/disruption/james@programneo.com';//+response.id;

  var n = self.registration.showNotification(notificationTitle, notificationOptions);
  if (n) {
    n.onclick = function(event){
      event.preventDefault(); // prevent the browser from focusing the Notification's tab
      window.open(redirectUri, '_blank');
    };
    setTimeout(n.close.bind(n), 5000);
  }
  return n;
});
self.addEventListener('push', function(event) {
  if (event.data) {
    console.log('This push event has data: ', event.data.json());    
  } else { 
    console.log('This push event has no data.');
  }
  var notification = event.data.json().data;
  console.log('body'+JSON.stringify(notification));
  console.log('body'+notification.body);
  bundleid = notification.bundleid;
  orderid = notification.orderid;
  const promiseChain = self.registration.showNotification(notification.title,{
    body: notification.body,
    icon: notification.icon,
    vibrate: [200, 100, 200, 100, 200, 100, 200],
    tag: notification.tag,
    badge: notification.badge,
    actions:[{action: 'Buy', title: 'Buy Now'},{action: 'Cancel', title: 'No Thanks'}],
    image:notification.image,   
  });
  event.waitUntil(promiseChain);
});

self.addEventListener('notificationclose', function(e) {
  
  console.log('Closed notification: ');
});

self.addEventListener('notificationclick', function(e) {
  console.log('notification clicked' + e.notification);
  if (!e.action) {
    // Was a normal notification click
    console.log('Notification Click.');
    clients.openWindow('/neo/insights/home');
  }
  var notification = e.notification;
  var action = e.action;

  if (action === 'Cancel') {
    notification.close();
  } else {
    clients.openWindow('/neo/bundles/offer/' + bundleid + '/' + orderid);
    //clients.openWindow('/neo/bundles/offer/' + bundleid + '&orderid=' + orderid);
    notification.close();
  }
});
