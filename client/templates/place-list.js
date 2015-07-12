Template.placeList.onCreated(function () {
  Session.setDefault('loadingPlaces', true);
  Session.setDefault('radius', 1);
});

Template.placeList.helpers({
  places: function () {
    return Places.find();
  },

  isTrue: function (varName) {
    return !!Session.get(varName);
  }
});
