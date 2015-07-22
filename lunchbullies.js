if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Meteor.startup(function() {
    GoogleMaps.load();
  });

  Template.body.helpers({
    location: function() {
      console.log(Geolocation.currentLocation());
      return Geolocation.currentLocation().coords.latitude;
    },
    exampleMapOptions: function() {
      // Make sure the maps API has loaded
      if (GoogleMaps.loaded()) {
        // Map initialization options
        return {
          center: new google.maps.LatLng(-37.8136, 144.9631),
          zoom: 8
        };
      }
    }
  });

  Template.hello.helpers({
    counter: function() {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function() {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    //code to run on server at startup
    // var yelp = Meteor.npmRequire('yelp');
    // Accounts.loginServiceConfiguration.insert({
    //   service: "yelp",
    //   oauth_consumer_key: "sXDM3UBwCcrU-XA7x0Qj5w",
    //   oauth_consumer_secret: "3l9txU0dbca0eUkwEkUes3mr2nw",
    //   token: "_kBSx2xmDM1boZpFl9-dN_UNkHVdGMo1",
    //   token_secret: "wdmmcKFhrh5iqSPO8gIpK3eB4Uo"
    // });

var OAuth = Meteor.npmRequire('OAuth');
console.log(OAuth());
    // HTTP.call("GET",
    //   "http://api.yelp.com/v2/search?term=food&location=San+Francisco", {
    //     params: {
    //       oauth_consumer_key: "sXDM3UBwCcrU-XA7x0Qj5w",
    //       oauth_consumer_secret: "3l9txU0dbca0eUkwEkUes3mr2nw",
    //       oauth_token: "DkPv6wBjdF6BlYEhtiGalE4KbWaB9p4x",
    //       oauth_token_secret: "OsMNqQoIa_Rsghr7fQz7ypArDB4",
    //       oauth_signature_method: "HMAC-SHA1",
    //       oauth_signature: "ieRJ/nbBhtm1u5lLDVq+SPD+HWA=",
    //       oauth_timestamp: new Date().getTime(),
    //       oauth_nonce: "ggehByZkPHx"
    //     }
    //   },
    //   function(error, result) {
    //     console.log(error, result);
    //   }
    // );

  //   var auth = {
  //   consumerKey: "sXDM3UBwCcrU-XA7x0Qj5w",
  //   consumerSecret: "3l9txU0dbca0eUkwEkUes3mr2nw",
  //   accessToken: "DkPv6wBjdF6BlYEhtiGalE4KbWaB9p4x",
  //   accessTokenSecret: "OsMNqQoIa_Rsghr7fQz7ypArDB4",
  // };
  //
  // var terms = 'food';
  // var near = 'San+Francisco';
  //
  // var accessor = {
  //   consumerSecret: auth.consumerSecret,
  //   tokenSecret: auth.accessTokenSecret
  // };
  //
  // var parameters = [];
  // parameters.push(['term', terms]);
  // parameters.push(['location', near]);
  // parameters.push(['oauth_consumer_key', auth.consumerKey]);
  // parameters.push(['oauth_consumer_secret', auth.consumerSecret]);
  // parameters.push(['oauth_token', auth.accessToken]);
  //
  // var message = {
  //   'action': 'http://api.yelp.com/v2/search',
  //   'method': 'GET',
  //   'parameters': parameters
  // };
  //
  // OAuth.OAuth2.setTimestampAndNonce(message);
  //
  // OAuth.SignatureMethod.sign(message, accessor);
  //
  // var parameterMap = OAuth.getParameterMap(message.parameters);
  // parameterMap.oauth_signature = OAuth.percentEncode(parameterMap.oauth_signature)
  //
  // var url = OAuth.addToURL(message.action,parameterMap);
  // var response = UrlFetchApp.fetch(url).getContentText();
  // var responseObject = Utilities.jsonParse(response);
  //have my JSON object, do whatever we want here, like add to spreadshee
  });
}
