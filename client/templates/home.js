Template.homePage.onCreated(function () {
  var template = this;

  // reactive vars
  template.location = new ReactiveVar(); // store lat/long
  template.places = new ReactiveVar(); // array of places
  template.loadingPlaces = new ReactiveVar(true); // are we loading places?
  template.radius = new ReactiveVar(); // 1 mile default

  template.autorun(function (c) {
    // This block of code is run every time any reactive object within changes
    // (hint: the Gelocation object is reactive)
    var latLng = Geolocation.latLng();

    if (latLng) { // we have a valid geoloc
      template.location.set(latLng);
      template.radius.set(1);

      c.stop(); // stop auto-running this, we got what we wanted
    }
  });

  template.autorun(function () {
    if (!template.location.get()) {
      return;
    }

    Meteor.call('getPlaces', template.location.get(), template.radius.get(),
      function (error, result) {
        if (!error) {
          template.places.set(result);
          template.loadingPlaces.set(false);
        }
      });
  });
});

Template.homePage.helpers({
  places: function () {
    return Template.instance().places.get();
  },

  isTrue: function (varName) {
    return eval('Template.instance().' + varName).get();
  }
});
