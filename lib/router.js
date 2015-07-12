Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.route('/', {
  name: 'placeList'
});

Router.route('/detail/:place_id', {
  name: 'placeDetail',
  data: function () {
    return Places.find();
  }
});
