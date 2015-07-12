Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'placeList'
});

Router.route('/detail/:place_id', {
  name: 'placeDetail',
  data: function () {
    return Places.findOne({place_id: this.params.place_id});
  }
});
