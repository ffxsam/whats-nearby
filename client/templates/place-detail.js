Template.placeDetail.onCreated(function () {
  var placeId = Router.current().params.place_id;

  Session.set('detail/loading', true);
  Meteor.call('getPlaceDetail', placeId, function (error, result) {
    Session.set('detail/loading', false);

    if (!error) {
      console.log(result);
      Session.set('detail/place', result);
    }
  });
});

Template.placeDetail.helpers({
  placeDetail: function () {
    return Session.get('detail/place');
  }
});
