Template.registerHelper('isTrue', function (varName) {
  return !!Session.get(varName);
});
