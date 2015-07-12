Meteor.methods({
  getPlaces: function (latLng, radius) {
    var reqURL = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    var result;
    debugger;
    try {
      result = HTTP.call('GET', reqURL, {
        params: {
          key: Meteor.settings.apiKey,
          location: latLng.lat + ',' + latLng.lng,
          radius: radius / 0.00062137 //convert to meters
        }
      });

      if (result.data.status === 'OK') {
        return result.data.results;
      } else {
        console.log(result.data.status);
      }
    } catch (e) {
      // TODO: handle errors
    }
  }
});
