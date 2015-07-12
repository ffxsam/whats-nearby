Meteor.startup(function () {
  Tracker.autorun(function (c) {
    /*
     * This block of code is run every time any reactive object within changes.
     * (hint: the Geolocation object is reactive)
     */
    var latLng = Geolocation.latLng();

    if (latLng) { // we have a valid geoloc
      Session.set('location', latLng);
      Session.set('radius', 1);

      c.stop(); // stop auto-running this, we got what we wanted
    }
  });

  Tracker.autorun(function () {
    /*
     * Another auto-run block. Only call the getPlaces method once we have a
     * valid geolocation. Then getPlaces will fetch nearby stuff.
     */
    if (!Session.get('location')) {
      return;
    }

    Session.set('loadingPlaces', true);
    Places.remove({});

    Meteor.call('getPlaces', Session.get('location'), Session.get('radius'),
      function (error, result) {
        if (!error) {
          Session.set('places', result);
          Session.set('loadingPlaces', false);

          // Cache the places list in a collection
          _.each(result, function (place) {
            Places.insert(place);
          });
        }
      });
  });
});
