Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {
  name: 'placeList'
});

Router.route('/detail/:place_id', {
  name: 'placeDetail'
});
