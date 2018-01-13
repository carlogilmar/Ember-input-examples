import Route from '@ember/routing/route';

export default Route.extend({
  actions:{
    selectLanguage: function(selection, component) {
      console.log("------");
      console.log(selection);
      console.log(component);
      console.log("------");
    }
  }
});
