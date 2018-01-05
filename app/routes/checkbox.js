import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [
      { name: 'red', checked: false },
      { name: 'yellow', checked: false },
      { name: 'blue', checked: false }
      ];
  },

  actions: {
    notifyChecked: function(item) {
			console.log(item.name);
      alert(item.name + ": " + item.checked);
    }
  }
});
